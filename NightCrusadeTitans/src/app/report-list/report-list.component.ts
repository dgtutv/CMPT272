import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Report } from '../shared/report';
import { ReportService } from '../report.service';
import { SortReportsService } from '../sort-reports.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  @Output() coordinates = new EventEmitter<Report>();
  @Output() refreshMap = new EventEmitter<void>(); 
  reports: Report[] = [];
  private subscription: Subscription | undefined;

  constructor(private reportService: ReportService, private sortReportsService: SortReportsService) { }

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
      this.refreshMap.emit();
      for(let report of this.reports){
        this.coordinates.emit(report);
      }
      this.loadReports(); 
    }).catch(error => {
      console.error('Error deleting report:', error);
    });
  }
}