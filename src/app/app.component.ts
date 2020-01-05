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

  ngOnInit() {
    setTimeout( () => this.loading = false , 4000);
  }
  readyClick() {
    this.ready = true;
  }
}
