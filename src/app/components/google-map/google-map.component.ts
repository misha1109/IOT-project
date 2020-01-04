import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {GoogleApiService} from '../../services/google-api.service';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewChecked {

  mapInited: boolean;
  constructor(private googleApi: GoogleApiService) { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    if ( document.getElementById('map') ) {
      if (!this.mapInited) {
        this.mapInited = true;
        this.googleApi.initMap();
      }
    }

  }
}
