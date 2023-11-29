import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { ReportListComponent } from '../report-list/report-list.component';
import { Router, RouterLink } from '@angular/router';
import { Report } from '../shared/report';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  form: FormGroup;
  currentImage: string = "";
  constructor(private reportService:ReportService, private router: Router) {
    let formControls = {
      reporterName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("",[Validators.required]),
      suspectName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      locationName: new FormControl("",[Validators.required, Validators.minLength(5)]),
      longitude: new FormControl("",[Validators.required]),
      latitude: new FormControl("",[Validators.required]),
      picture: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls);
  }

  async onSubmit(newReport: Report) {
    newReport.id = await this.reportService.generateId();
    newReport.timeReported = new Date().getTime();
    newReport.resolved = false;
    this.reportService.push(newReport);
    this.form.reset();
    this.router.navigate(["/home"]);
  }

}

