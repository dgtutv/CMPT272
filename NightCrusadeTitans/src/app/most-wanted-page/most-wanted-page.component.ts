import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../shared/report';


@Component({
  selector: 'app-most-wanted-page',
  templateUrl: './most-wanted-page.component.html',
  styleUrls: ['./most-wanted-page.component.css']
})
export class MostWantedPageComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.pull().then(reports => {
      for(let currentReport of reports){
        for(let report of reports){
          if(currentReport.suspectName == report.suspectName){
            currentReport.count++;
          }
        }
      }
      let sortedReports = reports.sort((a,b) => (a.count > b.count) ? -1 : 1);
      sortedReports = sortedReports.sort((a,b) => (a. timeReported < b.timeReported) ? 1 : -1);
      this.reports = sortedReports.slice(0,3);
    });
  }

}
