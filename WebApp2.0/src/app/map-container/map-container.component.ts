import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
declare const L: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})

export class MapContainerComponent implements OnInit {
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public latitude!: number;
  public longitude!: number;
  public markerSettings!: object;
  public date: Date = new Date();
  public currentMonth!: string;
  public time!: string;
  public currentDate!: String;
  public map: any;
  public searchControl: any;

  constructor(private apiService: ApiService) {
    this.getCurrentDateAndTime();
  }

  ngOnInit(): void {
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

  public getCurrentDateAndTime() {
    let hours = this.date.getHours().toString().padStart(2, '0');
    let minutes = this.date.getMinutes().toString().padStart(2, '0');
    let day = this.date.getDate().toString().padStart(2, '0');
    const month = this.date.getMonth();
    this.currentMonth = this.monthNames[month];
    let year = this.date.getFullYear().toString().padStart(2, '0');
    this.currentDate = `${day}/${this.currentMonth}/${year}`
    this.time = `${hours}:${minutes}`
    console.log(this.currentMonth);
  }

  public setMarker() {
    this.getCurrentDateAndTime();
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
    circle.bindPopup("Date and time:" + this.currentDate + " " + this.time + "; " + "Latitude:" + lat.toString() + "; " + "Longitude:" + lng.toString()).openPopup();
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
        this.shouldShowMarker(key.location_latitude, key.location_longitude);
      }
    });
  }
}