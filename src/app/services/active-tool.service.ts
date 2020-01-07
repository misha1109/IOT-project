import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveToolService {
  activeToolSub: Subject<string>;
  constructor() {
    this.activeToolSub = new Subject<string>();
  }
  getActiveToolSub() {
    return this.activeToolSub.asObservable();
  }
  setActiveTool( tool ) {
    this.activeToolSub.next( tool );
  }
}
