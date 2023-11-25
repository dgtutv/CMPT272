import { LocalizedString, ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

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

class Report {
  id: number
  reporterName: string
  phoneNumber: number
  suspectName: string
  locationName: string
  longitude: number
  latitude: number
  picture?: HTMLImageElement
  extraInfo: string
  timeReported: number
  resolved: boolean
  constructor(reporterName:string, phoneNumber:number, suspectName: string, locationName: string, longitude: number, latitude: number, picture: HTMLImageElement, extraInfo: string, id: number, timeReported: number, resolved: boolean){
    this.reporterName = reporterName;
    this.phoneNumber = phoneNumber;
    this.suspectName = suspectName;
    this.locationName = locationName;
    this.longitude = longitude;
    this.latitude = latitude;
    this.timeReported = timeReported;
    this.resolved = resolved;
    if(picture != null){
      this.picture = picture;
    }
    this.extraInfo = extraInfo;
    this.id = id;
  }
}