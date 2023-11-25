import { LocalizedString, ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Report } from './shared/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reports: Array<Report>
  constructor() {
    this.reports = this.pull();
  } 
  pull(): Report[]{
    let reportsJSON:any  = localStorage.getItem("reports");
    if(reportsJSON == null){
      this.reports = new Array<Report>;
    }
    else{
      this.reports = JSON.parse(reportsJSON);
    }
    return(this.reports);
  }
  push(newReport:Report): boolean{
    this.pull();
    for(let i:number=0; i<this.reports.length; i++){
      let currentReport: Report = this.reports[i];
      if(currentReport.id == newReport.id){
        return false;
      }
    }
    this.reports.push(newReport);
    localStorage.setItem("reports", JSON.stringify(this.reports));
    return true;
  }
  delete(reportToDelete:Report): boolean{
    this.pull();
    for(let i:number=0; i<this.reports.length; i++){
      let currentReport: Report = this.reports[i];
      if(currentReport.id == reportToDelete.id){
        let firstHalf = this.reports.slice(0, i);
        let secondHalf = this.reports.slice(i+1);
        this.reports = firstHalf.concat(secondHalf);
        localStorage.setItem("reports", JSON.stringify(this.reports));
        return true;
      }
    }
    return false;
  }
  generateId(): number{
    let idJSON:any = localStorage.getItem("prevID");
    if(idJSON != null){
      let id: number = JSON.parse(idJSON)+1;
      localStorage.setItem("prevID", id.toString());
      return id;
    }
    else{
      let id = 0;
      localStorage.setItem("prevID", "0");
      return id;
    }
  }
}
