import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  map: object;
  markers = [];
  polyline: {
    setMap: any;
    setPath: any;
  };
  markerBounds: object;
  snackDataSub = new Subject<{
    coordinates: {
      lat: string;
      lng: string;
    };
    location: string;
  }>();
  constructor() { }
  initMap() {
    const tempPoint = {lat: 36.7783, lng: 119.4179};
    // @ts-ignore
    this.map = new google.maps.Map(
      document.getElementById('map'), {zoom: 3, center: tempPoint}
    );
    // @ts-ignore
    this.polyline = new google.maps.Polyline({
      // set desired options for color width
      strokeColor: '#0000FF',  // blue (RRGGBB, R=red, G=green, B=blue)
      strokeOpacity: 0.4      // opacity of line
    }); // create the polyline (global)
    // @ts-ignore
    this.markerBounds = new google.maps.LatLngBounds();
  }
  addMarker( position, markerData, markerType ) {
    // @ts-ignore
    const icon = {
      submarine: 'assets/submarine.svg',
      ixp: 'assets/ixp-icon.svg',
      dc: 'assets/dc.svg'
    }[markerType];
    // @ts-ignore
    const marker = new google.maps.Marker(
      {position, map: this.map, icon});
    marker.addListener('click', () => {
      this.snackDataSub.next( {
        coordinates: position,
        location: markerData.lpName
      });
    });
    // @ts-ignore
    this.markerBounds.extend( position );
    return marker;
  }

  removeMarker(marker) {
    marker.setMap(null);
  }
  removeAllMarkers(markers) {
    markers.forEach( marker => this.removeMarker(marker));
    // @ts-ignore
    this.markerBounds = new google.maps.LatLngBounds();
  }
  drayLine( markers, submarine = false ) {
    let path;
    if ( submarine ) {
      path = markers.map( marker => marker.getPosition() )
    } else {
      path = this.drawNet( markers );
    }
    this.polyline.setMap(this.map);
    this.polyline.setPath(path);
    // @ts-ignore
    this.map.setZoom(2);
    // @ts-ignore
    setTimeout( () => this.map.fitBounds( this.markerBounds ), 1000);

  }
  drawNet( markers ) {
    const path = [];
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < markers.length; i++ ) {
      for ( let j = 0; j < markers.length; j++ ) {
        if ( i !== j ) {
          path.push( markers[j].getPosition() );
          this.markers = this.rotate( markers );
        }
        path.push( markers[0].getPosition() );
      }
    }
    return path;
  }
  rotate( markers ) {
    for ( let i = 0; i < markers.length - 1; i++) {
      const temp = [ markers[i], markers[i + 1] ];
      markers[i] = temp[1];
      markers[i + 1] = temp[0];
    }
    return markers;
  }
  removeLine() {
    this.polyline.setMap(null);
  }
  zoomOut() {
    // @ts-ignore
    this.markerBounds = new google.maps.LatLngBounds();
    // @ts-ignore
    this.map.setZoom(2);
  }
  getSnackSub() {
    return this.snackDataSub.asObservable();
  }
}
