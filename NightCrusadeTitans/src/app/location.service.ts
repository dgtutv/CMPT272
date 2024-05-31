import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { nanoid } from 'nanoid';
import { LocationCustom } from './locationCustom';
import { HttpClient } from '@angular/common/http';
import { ref, set, get, child, remove } from "firebase/database";
import { db } from '../environments/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  private locationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private collectionKey = 'locations';

  getLocationUpdate(): Observable<string | null> {
    return this.locationSubject.asObservable();
  }

  updateLocation(): void {
    this.locationSubject.next(null);
  }

  async push(newLocation: LocationCustom): Promise<void> {
    const locationsRef = ref(db, this.collectionKey);
    const snapshot = await get(locationsRef);
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const existingLocation = childSnapshot.val();
        if (existingLocation.name === newLocation.name) {
          alert("Location with that name already exists!");
          return;
        }
      });
    }
    const newLocationRef = ref(db, `${this.collectionKey}/${nanoid()}`);
    await set(newLocationRef, newLocation);
  }

  async pull(): Promise<LocationCustom[]> {
    const locationsRef = ref(db, this.collectionKey);
    const snapshot = await get(locationsRef);
    let parsedLocations: LocationCustom[] = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const locationData = childSnapshot.val();
        parsedLocations.push({ ...locationData, id: childSnapshot.key });
      });
    }
    return parsedLocations;
  }
}
