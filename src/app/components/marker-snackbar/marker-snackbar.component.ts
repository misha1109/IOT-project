import { Component, OnInit } from '@angular/core';
import {GoogleApiService} from '../../services/google-api.service';

@Component({
  selector: 'app-marker-snackbar',
  templateUrl: './marker-snackbar.component.html',
  styleUrls: ['./marker-snackbar.component.css']
})
export class MarkerSnackbarComponent implements OnInit {
  currSnackData: {
    coordinates: {
      lat: string;
      lng: string;
    };
    location: string;
  };
  lastInited: number;
  showSnack: boolean;
  constructor(private googleApiService: GoogleApiService) {
    this.googleApiService.getSnackSub().subscribe( data => {
      this.currSnackData = data;
      this.lastInited = Date.now();
      this.showSnack = true;
      setTimeout( () => {
        if ( Date.now() - this.lastInited >= 5000 ) {
          this.showSnack = false;
          setTimeout( () => {
            this.currSnackData = null;
          }, 1000);
        }
      }, 5000);
    });
  }

  ngOnInit() {
  }

}
