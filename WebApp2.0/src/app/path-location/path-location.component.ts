import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'path-location',
  templateUrl: `./path-location.component.html`
})
export class PathLocationComponent {
  location: Location;
  constructor(location: Location) {
    this.location = location;
    console.log(this.location);
  }

}