import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../shared/report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent{
  @Input() report!:Report;
  @Output() reportDeleted = new EventEmitter<Report>();

  constructor(private router: Router, private reportService: ReportService) { }

  toggleMoreInfo(report: Report) {
    report.showMoreInfo = !report.showMoreInfo;
  }

  deleteReport(report: Report) {
    this.reportService.delete(report);
    this.reportDeleted.emit(report);
  }
}