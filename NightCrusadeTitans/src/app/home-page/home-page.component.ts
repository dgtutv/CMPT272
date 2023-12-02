import { Component, OnInit } from '@angular/core';
import { Report } from '../shared/report';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentReport: Report | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(report: Report): void {
    this.currentReport = report;
    console.log(this.currentReport);
    let blur = document.getElementById("blur");
    if(blur){
      blur.classList.toggle("active");
    }
  }

  closeOverlay(): void {
    this.currentReport = undefined;
    let blur = document.getElementById("blur");
    if(blur){
      blur.classList.toggle("active");
    }
  }

  changeStatus(report: Report): void {
    console.log('Change status:', report);
  }
}
