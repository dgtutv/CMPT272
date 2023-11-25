import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../shared/report';

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