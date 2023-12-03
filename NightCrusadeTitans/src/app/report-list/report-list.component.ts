import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Report } from '../shared/report';
import { ReportService } from '../report.service';
import { SortReportsService } from '../sort-reports.service';
import { Subscription } from 'rxjs';
import { RefreshMapService } from '../refresh-map.service';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  @Output() coordinates = new EventEmitter<Report>();
  @Output() moreInfoEvent = new EventEmitter<Report>();
  @Output() editReportEvent = new EventEmitter<Report>();
  reports: Report[] = [];
  private subscription: Subscription | undefined;

  constructor(private reportService: ReportService, private sortReportsService: SortReportsService, private refreshMapService: RefreshMapService) { }

  ngOnInit(): void {
    this.loadReports();
    this.subscription = this.sortReportsService.reportUpdated$.subscribe(report => {
      this.loadReports();
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  
  loadReports(): void {
    this.reportService.pull().then(reports => {
      console.log('Reports from server:', reports);
      this.reports = reports;
      this.reports = this.sortReportsService.sortReports(this.reports);
      for(let report of this.reports){
        this.coordinates.emit(report);
      }
    }).catch(error => {
      console.error('Error loading reports:', error);
    });
  }

  onReportDelete(report: Report): void {
    this.reportService.delete(report).then(() => {
      this.refreshMapService.refreshMap(this.reports);
      for(let report of this.reports){
        this.coordinates.emit(report);
      }
      this.loadReports(); 
    }).catch(error => {
      console.error('Error deleting report:', error);
    });
  }

  moreInfo(report: Report): void {
    this.moreInfoEvent.emit(report);
  }

  editReport(report: Report): void {
    let queryString = prompt("Please enter your password to edit this report");
    if(queryString == null){
      return;
    } 
    let hashedQuery = MD5(queryString).toString();
    if(hashedQuery === "fcab0453879a2b2281bc5073e3f5fe54"){
      this.editReportEvent.emit(report);
    }
    else{
      alert("Incorrect password");
    }
  }
}