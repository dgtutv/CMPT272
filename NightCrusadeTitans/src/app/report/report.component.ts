import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../shared/report';
import { ReportService } from '../report.service';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent{
  @Input() report!:Report;
  @Output() reportDeleted = new EventEmitter<Report>();

  constructor(private router: Router, private reportService: ReportService) { }

  toggleMoreInfo(report: Report) {
    report.showMoreInfo = !report.showMoreInfo;
  }

  deleteReport(report: Report) {
    let queryString = prompt("Please enter your password to delete this report");
    if(queryString == null){
      return;
    } 
    let hashedQuery = MD5(queryString).toString();
    if(hashedQuery === "fcab0453879a2b2281bc5073e3f5fe54"){
      this.reportDeleted.emit(report);
    }
    else{
      alert("Incorrect password");
    }
  }
}