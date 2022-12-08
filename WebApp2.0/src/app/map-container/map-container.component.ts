import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements OnInit {
  public latitude: number | undefined;
  public longitude: number | undefined;
  public markerSettings: object | undefined;
  public shouldShowMarker = false;

  constructor() { }
  ngOnInit(): void {
    if (!navigator.geolocation) {
      return
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      let mymap = L.map('map').setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mymap);

      var circle = L.circle([this.latitude, this.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      }).addTo(mymap);
    })

    if (this.latitude && this.longitude) {
      this.setMarker();
    }
  }

  public setMarker() {
    this.shouldShowMarker = true;
    this.markerSettings = [{
      visibility: true,
      shape: 'Image',
      imageUrl: 'maps/default-map/datetime/ballon.png',
      dataSource: [
        { latitude: this.latitude },
        { longitude: this.longitude }
      ],
      animationDuration: 3
    }],
      this.shouldShowMarker = true;
  }

}
