import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { nanoid } from 'nanoid';
import { Location } from './location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationUpdateService {
  constructor(private http: HttpClient) {}
  private locationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private baseUrl = 'https://272.selfip.net/apps/';
  private appKey = 'slI61v2RVM';
  private collectionKey = 'locations';

  getLocationUpdate(): Observable<string | null> {
    return this.locationSubject.asObservable();
  }

  updateLocation(locationName: string): void {
    this.locationSubject.next(locationName);
  }

  async push(newLocation: Location): Promise<any> {
    const url = `${this.baseUrl}${this.appKey}/collections/${this.collectionKey}/documents/`;
    console.log('Sending report to server:', newLocation);
    const headers = { 'Content-Type': 'application/json' };
    let newLocationJSON: string = JSON.stringify(newLocation);
    let key = nanoid();
    const body = { key: key, data: newLocationJSON };
    return firstValueFrom(this.http.post(url, body, { headers }));
  }

  async pull(): Promise<Location[]> {
    const url = `${this.baseUrl}${this.appKey}/collections/${this.collectionKey}/documents/`;
    let fetchedLocations:Promise<{key:string, data:string}[]> = firstValueFrom(this.http.get<{key:string, data:string}[]>(url));
    
    return fetchedLocations.then(locations => {
      let parsedLocations: Location[] = [];
      for(let i = 0; i < locations.length; i++) {
        parsedLocations.push(JSON.parse(locations[i].data));
      }
      return parsedLocations;
    });
  }
}
