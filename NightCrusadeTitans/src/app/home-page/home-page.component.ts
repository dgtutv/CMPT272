import { Component, OnInit } from '@angular/core';
import { Report } from '../shared/report';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(report: Report): void {
    console.log(report);
  }
}
