import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { LocationUpdateService } from '../location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent{
  map!: L.Map;
  form: FormGroup; 
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  currentMarker!: L.Marker<any>;

  constructor(private locationService: LocationUpdateService) {
    let formControls = {
      longitude: new FormControl("", [Validators.required]),
      latitude: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    };
    this.form = new FormGroup(formControls);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  onSubmit() {
    let newLocationName = this.form.value.name;
    this.locationService.updateLocation(newLocationName);
  }

  initMap() {
    this.map = L.map(this.mapContainer.nativeElement).setView([49.193568, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
    this.map.on('click', (e: any) => {
      //Update form controls with latitude and longitude
      this.form.controls['longitude'].setValue(e.latlng.lng.toFixed(4));
      this.form.controls['latitude'].setValue(e.latlng.lat.toFixed(4));
    });

    this.form.controls['longitude'].valueChanges.subscribe(value => {
      this.updateMarker(this.form.controls['latitude'].value, value);
    });

    this.form.controls['latitude'].valueChanges.subscribe(value => {
      this.updateMarker(value, this.form.controls['longitude'].value);
    });
  }

  updateMarker(latitude: number, longitude: number) {
    if (this.currentMarker) {
      this.map!.removeLayer(this.currentMarker);
    }
    this.currentMarker = L.marker([latitude, longitude]);
    this.currentMarker.addTo(this.map!);
    this.map!.flyTo([latitude, longitude], 15);
  }
}