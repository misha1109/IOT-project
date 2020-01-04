import {Component, Input, OnInit} from '@angular/core';
import { subMarineCables } from '../../geoDATA/submarineCables';
import {GoogleApiService} from '../../services/google-api.service';
@Component({
  selector: 'app-cable-toolbar',
  templateUrl: './cable-toolbar.component.html',
  styleUrls: ['./cable-toolbar.component.css']
})
export class CableToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() geoData: object;
  chosenCable: {
    index: number;
    cable: object;
  }
  cables = [];
  constructor( private googleApiService: GoogleApiService) { }

  ngOnInit() {
    this.cables = subMarineCables;
  }
  showCable(index) {
    this.googleApiService.removeLine();
    if ( this.chosenCable && this.chosenCable.index === index ) {
      this.removeCables();
      this.chosenCable = null;
      this.googleApiService.zoomOut();
    } else {
      this.removeCables();
      const landingPoints = this.cables[index].landing_points.map( lp => {
        return {
          coordinates: {
            lat: parseFloat(lp.latlon.split(',')[0]) ,
            lng: parseFloat(lp.latlon.split(',')[1]),
          },
          lpName: lp.name
        };
      });
      const cable = {
        landingPoints,
        markers: [],
        name: this.cables[index].name,
        length: this.cables[index].length,
        owners: this.cables[index].owners,
        url: this.cables[index].url,
        ready: this.cables[index].rfs
      }
      cable.landingPoints.forEach( lp => {
        const marker = this.googleApiService.addMarker( lp.coordinates, lp );
        cable.markers.push(marker);
      })
      this.googleApiService.drayLine( cable.markers );
      this.chosenCable = {
        index,
        cable
      };
    }
  }
  removeCables() {
    if ( this.chosenCable && this.chosenCable.cable ) {
      // @ts-ignore
      this.googleApiService.removeAllMarkers(this.chosenCable.cable.markers);
    }
  }
}
