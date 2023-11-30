import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { Router, RouterLink } from '@angular/router';
import { Report } from '../shared/report';
import * as L from 'leaflet';


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  private map: L.Map | undefined;
  form: FormGroup;
  currentImage: string = "";
  currentMarker: L.Marker | undefined;
  constructor(private reportService:ReportService, private router: Router) {
    let formControls = {
      reporterName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("",[Validators.required]),
      suspectName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      locationName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      longitude: new FormControl("",[Validators.required]),
      latitude: new FormControl("",[Validators.required]),
      picture: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls);
  }

  ngOnInit(): void {
    this.map = L.map('map').setView([49.193568, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map!);
    this.map!.on('click', (e: any) => {
      if(this.currentMarker != undefined){
        this.map!.removeLayer(this.currentMarker);
      }

      //place a marker where the user clicked
      this.currentMarker = L.marker([e.latlng.lat, e.latlng.lng]);
      this.currentMarker.addTo(this.map!);

      //set the form controls to the lat and long of the marker
      this.form.controls['longitude'].setValue(e.latlng.lng.toFixed(4));
      this.form.controls['latitude'].setValue(e.latlng.lat.toFixed(4));

      this.form.controls['longitude'].markAsTouched();
      this.form.controls['longitude'].updateValueAndValidity();
      this.form.controls['latitude'].markAsTouched();
      this.form.controls['latitude'].updateValueAndValidity();
    });
  }

  async onSubmit(newReport: Report) {
    newReport.id = await this.reportService.generateId();
    newReport.timeReported = new Date().getTime();
    newReport.resolved = false;
    newReport.latitude = Number(Number(newReport.latitude).toFixed(4));
    newReport.longitude = Number(Number(newReport.longitude).toFixed(4));

    this.reportService.push(newReport);
    this.form.reset();
    this.router.navigate(["/home"]);
  }

}

