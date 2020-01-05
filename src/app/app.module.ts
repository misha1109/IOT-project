import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { CableToolbarComponent } from './components/cable-toolbar/cable-toolbar.component';
import { MarkerSnackbarComponent } from './components/marker-snackbar/marker-snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MainToolbarComponent,
    CableToolbarComponent,
    MarkerSnackbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
