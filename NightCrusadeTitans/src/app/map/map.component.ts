import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { Report } from '../shared/report';
import { SortReportsService } from '../sort-reports.service';
import { RefreshMapService } from '../refresh-map.service';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;
  private markersLayer: L.LayerGroup = L.layerGroup();

  constructor(private sortReportService:SortReportsService, private refreshMapService: RefreshMapService, private reportService: ReportService) { }

  ngOnInit(): void {
    this.refreshMapService.refreshMap$.subscribe(() => {
      //get the reports from the server
      this.reportService.pull().then(reports => {
        this.refreshMap(reports);
      }).catch(error => {
        console.error('Error loading reports:', error);
      });
    });
    this.createMap();
  }

  createMap(){
    this.map = L.map('map').setView([49.205, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
    this.markersLayer.addTo(this.map);
  }

  handleCoordinates(report: Report) {
    if (this.map) {
      let currentMarker = L.marker([report.latitude, report.longitude], { riseOnHover: true })
        .on('click', () => {
          this.sortReportService.updateSortByReport(report);
        })
        .bindPopup(`<b>${report.locationName}</b><br>Suspect Name: ${report.suspectName}`)
        .addTo(this.markersLayer);
    }
  }

  refreshMap(reportList: Report[]){
    this.markersLayer.clearLayers();
    reportList.forEach(report => {
      this.handleCoordinates(report);
    });
  }
}