import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class MapContainerComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  // public getLocationNormalization = (): void => {
  //   // this.location.prepareExternalUrl('/home')
  // }
}
