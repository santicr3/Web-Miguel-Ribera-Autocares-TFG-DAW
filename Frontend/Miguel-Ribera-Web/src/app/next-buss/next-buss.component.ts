import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageService } from '../services/language.service';
import { HttpClientModule } from '@angular/common/http'; // This is necessary for standalone components
import { LocationService } from '../services/location.service';

interface StationSchema {
  id: string;
  address: string;
  lat: string;
  longi: string;
}

@Component({
  selector: 'app-next-buss',
  standalone: true,
  imports: [FormsModule, NgSelectModule, HttpClientModule], // Ensure HttpClientModule is imported here
  templateUrl: './next-buss.component.html',
  styleUrls: ['./next-buss.component.css'],
})
export class NextBussComponent implements OnInit {
  stationsData: StationSchema[] = [];
  stationsName: string[] = [];
  station = '';
  location: GeolocationPosition | null = null;
  data: any;
  texts?: any;
  language!: string;
  @Output() showNextBusDialog = new EventEmitter<boolean>;

  constructor(private languageService: LanguageService, private locationService: LocationService) {}

  ngOnInit() {
    this.getStations();

    this.setSubscriptions();
  }

  setSubscriptions() {
    this.languageService.currentLanguage.subscribe((value) => {
      this.language = value;

      if (this.data) {
        this.texts = this.data[this.language];
      }
    });

    this.languageService.getJSON().subscribe((data) => {
      this.data = data.nextBus;
      if (this.data) {
        this.texts = this.data[this.language];
      }

      this.locationService.currentStation.subscribe((value) => {
        this.station = value;
      });
    });

  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((res) => {
      this.location = res;
      this.locationService.changeData(this.location.coords);
    });
  }

  getStations() {
    fetch('https://miguel-ribera-backend-firebase.onrender.com/stations')
      .then((response) => response.json())
      .then((data) => {
        this.stationsData = data;
        data.forEach((element: StationSchema) => {
          this.stationsName = [...this.stationsName, element.address];
        });
      })
      .catch((error) =>
        console.error('Error al obtener las paradas de autobús:', error)
      );
  }

  setSelectedStation(){
    this.locationService.changeStation(this.station);
    
  }

  searchBus(){
    this.showNextBusDialog.emit(true)
  }
}
