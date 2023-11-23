import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  form: FormGroup;
  constructor() {
    let formControls = {
      reporterName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      suspectName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      locationName: new FormControl("",[Validators.required, Validators.minLength(5)]),
      longitude: new FormControl("",[Validators.required]),
      latitude: new FormControl("",[Validators.required]),
      picture: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls);
  }

  onSubmit(newReport:Report){
    console.log(newReport);
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
