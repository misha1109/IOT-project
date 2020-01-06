import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IOT-webGIS';
  loading = true;
  ready = false;
  screenSize: {
    height: number;
    width: number;
  }


  ngOnInit() {
    setTimeout( () => this.loading = false , 4000);
    this.screenSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    console.log(this.screenSize);
  }
  readyClick() {
    this.ready = true;
  }
}
