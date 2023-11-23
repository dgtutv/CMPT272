import { LocalizedString, ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportServicerService {
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
}

class Report {
  id: string
  reporterName: string
  phoneNumber: number
  suspectName: string
  locationName: string
  longitude: number
  latitude: number
  picture?: HTMLImageElement
  extraInfo: string
  constructor(reporterName:string, phoneNumber:number, suspectName: string, locationName: string, longitude: number, latitude: number, picture: HTMLImageElement, extraInfo: string, id: string){
    this.reporterName = reporterName;
    this.phoneNumber = phoneNumber;
    this.suspectName = suspectName;
    this.locationName = locationName;
    this.longitude = longitude;
    this.latitude = latitude;
    if(picture != null){
      this.picture = picture;
    }
    this.extraInfo = extraInfo;
    this.id = id;
  }
}
