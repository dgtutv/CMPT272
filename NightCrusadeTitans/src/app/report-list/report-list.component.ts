import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Report } from '../shared/report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  @Output() coordinates = new EventEmitter<{longitude: number, latitude: number}>();
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    console.log('ReportListComponent initialized');
    this.loadReports();
  }
  
  loadReports(): void {
    this.reportService.pull().then(reports => {
      console.log('Reports from server:', reports);
      this.reports = reports;
      for(let report of this.reports){
        this.coordinates.emit({longitude: report.longitude, latitude: report.latitude});
      }
    }).catch(error => {
      console.error('Error loading reports:', error);
    });
  }

  onReportDelete(report: Report): void {
    this.reportService.delete(report).then(() => {
      this.loadReports();
    }).catch(error => {
      console.error('Error deleting report:', error);
    });
  }
}