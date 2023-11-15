import { Component } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {
  reports;
  query: string;
  onReportDelete(event: any){
    let reportToDelete  = event['delete-report'];
    this.reports = this.reports.filter((r) => r.id != reportToDelete);  
  }
  constructor(){
    this.query = '';
    this.reports = [
      {
      criminalName: 'Monster X',
      id: "0",
      location: 'Metrotown',
      hasImage: true,
      witnessName: "Felix",
      witnessNumber: "(778)-555-5555",
      openCase: true,
      /*use a pipe to make this display nicely via the video*/
      time: new Date().getTime(), //Num of ms since a given time
      extraInfo: "Known menace to society"
      },
    ];
  };


}

