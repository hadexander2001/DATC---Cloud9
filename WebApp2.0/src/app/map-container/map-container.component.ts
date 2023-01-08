import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
declare const L: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})

export class MapContainerComponent implements OnInit {
  public latitude!: number;
  public longitude!: number;
  public markerSettings!: object;
  public date: Date = new Date();
  public time!: number;
  public map: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCurrentTime();
    this.map = L.map('map').setView([45.7489, 21.2087], 13);
    this.initializeMap();
    this.populateMap();
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

  public getCurrentTime() {
  }

  public setMarker() {
    this.time = this.date.getTime()
    this.apiService.postCoordinates(this.date, this.latitude, this.longitude).subscribe({
      next: () => {
        this.shouldShowMarker(this.latitude, this.longitude);
      }
    })
  }

  public shouldShowMarker(lat: number, lng: number) {
    var circle = L.circle([lat, lng], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 200
    }).addTo(this.map);
    circle.bindPopup("Latitude:" + lat.toString() + "; " + "Longitude:" + lng.toString()).openPopup();
  }

  public populateMap() {
    this.apiService.getSignals().subscribe(data => {
      const database = {
        values: data,
        [Symbol.iterator]() {
          let index = 0;
          return {
            next: () => {
              if (index < this.values.length) {
                return { value: this.values[index++], done: false };
              } else {
                return { done: true };
              }
            }
          }
        }
      };

      for (let key of database) {
        console.log(key);
        this.shouldShowMarker(key.location_latitude, key.location_longitude);
      }
    });
  }
}