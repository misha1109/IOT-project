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
    const tempPoint = {lat: -25.344, lng: 131.036};
    // @ts-ignore
    this.map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: tempPoint}
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
  addMarker( position, markerData ) {
    // @ts-ignore
    const marker = new google.maps.Marker({position, map: this.map});
    marker.addListener('click', () => {
      console.log(markerData);
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
  drayLine( markers ) {
    const path = markers.map( marker => marker.getPosition() )
    this.polyline.setMap(this.map);
    this.polyline.setPath(path);
    // @ts-ignore
    this.map.setZoom(2);
    // @ts-ignore
    setTimeout( () => this.map.fitBounds( this.markerBounds ), 1000);

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
