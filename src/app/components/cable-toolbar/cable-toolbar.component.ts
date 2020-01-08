import {Component, Input, OnInit} from '@angular/core';
import { subMarineCables } from '../../geoDATA/submarineCables';
import {GoogleApiService} from '../../services/google-api.service';
import {ActiveToolService} from '../../services/active-tool.service';
@Component({
  selector: 'app-cable-toolbar',
  templateUrl: './cable-toolbar.component.html',
  styleUrls: ['./cable-toolbar.component.css']
})
export class CableToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() geoData: object;
  @Input() type;
  chosenCable: {
    index: number;
    cable: {
      markers: any;
      name: string;
      length: string;
      owners: string;
      url: string;
      ready: string,
      location: string
    };
  };
  showTool: boolean;
  cables = [];
  constructor( private googleApiService: GoogleApiService, private activeToolService: ActiveToolService) {
    this.activeToolService.getActiveToolSub().subscribe( tool => {
      if ( this.type === tool ) {
        this.showTool = true;
      }  else {
        this.showTool = false;
        this.removeCables();
        if ( this.chosenCable && this.chosenCable.cable ) {
          this.googleApiService.removeAllMarkers( this.chosenCable.cable.markers )
        }
        this.googleApiService.removeLine();
        this.chosenCable = null;
      }
    });
  }

  ngOnInit() {
    this.cables = subMarineCables[0][this.type];
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
        ready: this.cables[index].rfs,
        location: this.cables[index].location
      }
      cable.landingPoints.forEach( lp => {
        const marker = this.googleApiService.addMarker( lp.coordinates, lp, this.type );
        cable.markers.push(marker);
      })
      const type = this.type === 'submarine' ? true : false;
      this.googleApiService.drayLine( cable.markers, type );
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
  chooseTool() {
    this.showTool = !this.showTool;
    if ( !this.showTool ) {
      this.closeTool();
    }
    this.activeToolService.setActiveTool( this.type );
  }
  closeTool() {
    this.showTool = !this.showTool;
    if ( this.chosenCable && this.chosenCable.cable ) {
      this.googleApiService.removeAllMarkers( this.chosenCable.cable.markers )
    }
    this.chosenCable = null;
    this.activeToolService.setActiveTool('');
  }
}
