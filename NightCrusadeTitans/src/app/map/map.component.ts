import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor() {}

  ngOnInit(): void {
    this.map = L.map('map').setView([49.193568, -122.689897], 9.8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
  }

  handleCoordinates(coordinates: { longitude: number; latitude: number }) {
    if (this.map) {
      L.marker([coordinates.longitude, coordinates.latitude]).addTo(this.map);
    }
  }
}