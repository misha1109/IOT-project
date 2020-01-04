import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { CableToolbarComponent } from './components/cable-toolbar/cable-toolbar.component';
import { MarkerSnackbarComponent } from './components/marker-snackbar/marker-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MainToolbarComponent,
    CableToolbarComponent,
    MarkerSnackbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
