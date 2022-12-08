import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Maps, Marker } from '@syncfusion/ej2-angular-maps';

Maps.Inject(Marker);

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
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
      this.longitude = position.coords.longitude
    })

    if (this.latitude && this.longitude) {
      this.setMarker();
    }
  }

  public setMarker() {

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
