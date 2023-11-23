import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportServicerService {
  reports: Report[]
  constructor() {
    this.reports = Array();
  }
}

class Report {
  reporterName: string
  phoneNumber: number
  suspectName: string
  locationName: string
  longitude: number
  latitude: number
  picture?: HTMLImageElement
  extraInfo: string
  constructor(reporterName:string, phoneNumber:number, suspectName: string, locationName: string, longitude: number, latitude: number, picture: HTMLImageElement, extraInfo: string){
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
  }
}
