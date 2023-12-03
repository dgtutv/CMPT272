import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { Router, RouterLink } from '@angular/router';
import { Report } from '../shared/report';
import * as L from 'leaflet';
import { LocationService } from '../location.service';
import { LocationCustom } from '../locationCustom';


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent {
  map: L.Map | undefined;
  form: FormGroup;
  currentImage: string = "";
  currentMarker: L.Marker | undefined;
  createLocation: boolean = false;
  showAddLocationPopup: boolean = false;
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  locationNames!: string[];
  locations!: LocationCustom[];

  constructor(private reportService:ReportService, private router: Router, private locationService: LocationService) {
    let formControls = {
      reporterName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
      suspectName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      locationName: new FormControl("",[Validators.required]),
      picture: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls);
    this.locationService.pull().then((locations) => {
      this.locations = locations;
      this.locationNames = this.locations.map(location => location.name);
    });
  }

  openAddLocationPopup() {
    this.showAddLocationPopup = true;
  }

  onLocationCreated(newLocation: LocationCustom){
    this.locationService.pull().then((locations) => {
      this.locations = locations;
      this.locationNames = this.locations.map(location => location.name);
      this.showAddLocationPopup = false;
      this.form.controls['locationName'].setValue(newLocation.name);
    });
  }

  ngOnInit(): void {
    // Subscribe to location updates
    this.locationService.getLocationUpdate().subscribe((locationName) => {
      this.locationService.pull().then((locations) => {
        this.locations = locations;
        this.locationNames = this.locations.map(location => location.name);
      });
    });
  }

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
  createNewLocation() {
    this.showAddLocationPopup = true;
  }
}

