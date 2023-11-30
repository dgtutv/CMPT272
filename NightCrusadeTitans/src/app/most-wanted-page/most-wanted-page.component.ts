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
      let counts: { [suspectName: string]: number } = {};
  
      for(let report of reports){
        if(counts[report.suspectName] === undefined){
          counts[report.suspectName] = 1;
        } else {
          counts[report.suspectName]++;
        }
      }
  
      for(let report of reports){
        report.count = counts[report.suspectName];
      }
        
      let sortedReports = reports.sort((a, b) => {
        if (a.count === b.count) {
          return a.timeReported > b.timeReported ? 1 : -1;
        }
        return a.count > b.count ? -1 : 1;
      });
  
      this.reports = sortedReports.slice(0,3);
    });
  }

}
