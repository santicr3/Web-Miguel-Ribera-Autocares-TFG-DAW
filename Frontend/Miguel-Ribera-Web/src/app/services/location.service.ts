import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private userLocation = new BehaviorSubject<GeolocationCoordinates>({
    latitude: 0,
    longitude: 0,
    altitude: null,
    accuracy: 0,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  });
  currentData = this.userLocation.asObservable();
  private selectedStation = new BehaviorSubject<string>('')
  currentStation = this.selectedStation.asObservable();

  changeData(data: GeolocationCoordinates) {
    this.userLocation.next(data);
  }

  changeStation(data: string) {
    this.selectedStation.next(data);
  }
}
