import { Component, OnInit } from '@angular/core';
declare const L: any;
// declare let mymap: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})

export class MapContainerComponent implements OnInit {
  public latitude: number | undefined;
  public longitude: number | undefined;
  public markerSettings: object | undefined;
  public map: any;

  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map').setView([45.7489, 21.2087], 13)
    this.initializeMap();
  }

  public initializeMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    })
  }

  public setMarker() {
    var circle = L.circle([this.latitude, this.longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 200
    }).addTo(this.map);
  }
}
