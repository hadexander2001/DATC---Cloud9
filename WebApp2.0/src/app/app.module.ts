import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { PathLocationComponent } from './path-location/path-location.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MapContainerComponent,
    HomeComponent,
    ContactUsComponent,
    SubmitFormComponent,
    PathLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
