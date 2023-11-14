import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  report: any;

  constructor(){
    this.report = {
      name: "Monster X",
      location: "Metrotown",
      reporterName: "Felix (778-555-5555)",
      time: new Date().getTime(),
      open: true,
      extraInfo: "He's sliming the children!"
    };
  };
}
