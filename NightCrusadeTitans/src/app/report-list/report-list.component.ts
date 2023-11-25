import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Array<Report>;
  constructor(private rs:ReportService) { 
    this.reports = [];
  }

  ngOnInit(): void {
    this.reports = this.rs.pull();
  }

  onReportDelete(reportToBeDeleted:Report): void{
    this.reports = new Array<Report>;
    this.rs.delete(reportToBeDeleted);
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
