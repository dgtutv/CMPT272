import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent{
  @Input() report!:Report

  constructor(private router: Router) { }

  toggleMoreInfo(report: Report) {
    report.showMoreInfo = !report.showMoreInfo;
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
  showMoreInfo: boolean = false; 

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