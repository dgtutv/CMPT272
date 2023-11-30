import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshMapService {
  refreshMap$ = new Subject<void>();

  constructor() { }

  refreshMap() {
    this.refreshMap$.next();
  }
}