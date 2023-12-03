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
  createLocation: boolean = false;
  locations: Location[] = [
    new Location("Burnaby", 49.2827, -123.1207),
    new Location("Coquitlam", 49.2827, -122.7932),
    new Location("Delta", 49.0847, -123.0586),
    new Location("Langley", 49.1036, -122.6586),
    new Location("Maple Ridge", 49.2209, -122.6010),
    new Location("New Westminster", 49.2109, -122.9223),
    new Location("North Vancouver", 49.3163, -123.0693),
    new Location("Pitt Meadows", 49.2215, -122.6895),
    new Location("Port Coquitlam", 49.2636, -122.7811),
    new Location("Port Moody", 49.2827, -122.8456),
    new Location("Richmond", 49.1666, -123.1336),
    new Location("Surrey", 49.1913, -122.8490),
    new Location("Vancouver", 49.2827, -123.1207),
    new Location("West Vancouver", 49.3310, -123.2669),
    new Location("White Rock", 49.0253, -122.8024)
  ];
  locationNames: string[] = this.locations.map(location => location.name);

  constructor(private reportService:ReportService, private router: Router) {
    this.reportService.pull().then((reports) => {
      for(let report of reports)
      if(!this.locationNames.includes(report.locationName)){
        this.locations.push(new Location(report.locationName, report.latitude, report.longitude));
        this.locationNames.push(report.locationName);
      }
    });
    let formControls = {
      reporterName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
      suspectName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      locationName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      longitude: new FormControl("",[Validators.required]),
      latitude: new FormControl("",[Validators.required]),
      picture: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls);
  }

  ngOnInit(): void {}

  onSubmit(newReport: Report) {
    newReport.id = this.reportService.generateId();
    newReport.timeReported = new Date().getTime();
    newReport.resolved = false;
    newReport.latitude = Number(Number(newReport.latitude).toFixed(4));
    newReport.longitude = Number(Number(newReport.longitude).toFixed(4));

    this.reportService.push(newReport);
    this.form.reset();
    this.router.navigate(["/home"]);
  }

  createNewLocation(){
    this.createLocation = true;
    this.map = L.map('map').setView([49.193568, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map!);
    this.map!.on('click', (e: any) => {
      if(this.currentMarker != undefined){
        this.map!.removeLayer(this.currentMarker);
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
      }
    });
  }
}

class Location{
  name: string;
  latitude: number;
  longitude: number;
  constructor(name: string, latitude: number, longitude: number){
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}