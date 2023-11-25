import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../shared/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Array<Report>;
  constructor(private rs:ReportService) { 
    this.reports = [];
  }

  ngOnInit(): void {
    this.reports = this.rs.pull();
  }

  onReportDelete(reportToBeDeleted:Report): void{
    this.reports = new Array<Report>;
    this.rs.delete(reportToBeDeleted);
  }

}
