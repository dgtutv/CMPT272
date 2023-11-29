import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { Report } from '../shared/report';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;
  private markersLayer: L.LayerGroup = L.layerGroup();
  @Output() markerClick = new EventEmitter<Report>();

  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map').setView([49.193568, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
    this.markersLayer.addTo(this.map);
  }

  handleCoordinates(report: Report) {
    if (this.map) {
      let currentMarker = L.marker([report.longitude, report.latitude], { riseOnHover: true })
        .on('click', () => {
          this.markerClick.emit(report);
        })
        .bindPopup(`<b>${report.locationName}</b><br>Suspect Name: ${report.suspectName}`)
        .addTo(this.markersLayer);
    }
  }
}