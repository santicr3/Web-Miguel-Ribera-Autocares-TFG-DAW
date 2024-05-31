import { Component } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';
import { LocationService } from '../services/location.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';

const CULLERA = { lat: 39.16516446698469, lng: -0.25599909774652474 };
const MAP_STYLE =
  'https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBASlVWRHk5T2Izb3RRUmx4Zzs1NTNlNTYwNC05YzA5LTRiMjQtYTBiYy05MDZiNWE0Yzk2Mzk=.json?key=KbZ9ytsB1kvpAiO7GPxOHsyxfmuGTxdN';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  constructor(
    private cookies: CookieService,
    private locationService: LocationService
  ) {}
  map: any;
  data: any;
  userCords: any;
  userMarker: tt.Marker | undefined;
  userPopup: tt.Popup | undefined;

  stations: Array<any> = [];
  user!: string;
  ngOnInit() {
    this.map = tt.map({
      key: environment.tomtom.key,
      style: MAP_STYLE,
      container: 'map',
      center: CULLERA,
      zoom: 15,
      minZoom: 12,
    });

    this.setStationsMarkers();

    this.userPopup = new tt.Popup().setHTML(
      `<div class='flex justify-center items-center rounded w-full overflow-hidden'> <i class="bi bi-person"></i> <h3>Tu</h3> </div>`
    );
  
    this.userMarker = new tt.Marker()
      .setPopup(this.userPopup);

    var mapCanvas = this.map.getCanvas();
    mapCanvas.classList.add('map', 'rounded', 'shadow');

    this.user = this.cookies.get('user');

    this.locationService.currentStation.subscribe((data) => {
      var center = this.stations.filter((value) => value.address == data);

      if (center.length != 0) {
        this.map.setCenter({ lat: center[0].lat, lng: center[0].longi });
      }
    });

    this.locationService.currentData.subscribe((data) => {
      this.userCords = data;
      if (this.userCords.latitude != 0) {
        var userPopup = new tt.Popup().setHTML(
          `<div class='flex justify-center items-center rounded w-full overflow-hidden'> <i class="bi bi-person"></i> <h3>${this.user}</h3> </div>`
        );

        if (this.stations) {
          var closer = 99999;
          var closerStation = this.stations[0];
          this.stations.forEach((station) => {
            var stationDistance = this.getDistance(
              this.userCords.latitude,
              this.userCords.longitude,
              parseFloat(station.lat),
              parseFloat(station.longi)
            );
            if (closer > stationDistance) {
              closer = stationDistance;
              closerStation = station;
            }
          });

          this.locationService.changeStation(closerStation.address);

          this.map
            .setCenter({
              lat:
                (parseFloat(closerStation.lat) + this.userCords.latitude) / 2,
              lng:
                (parseFloat(closerStation.longi) + this.userCords.longitude) /
                2,
            })
            .setZoom(15);
        }

        var userMarker = document.createElement('div');
        userMarker.className = 'custom-marker';
        userMarker.style.backgroundImage =
          "url('../../assets/user-location.png')";

        new tt.Marker({ element: userMarker })
          .setLngLat([this.userCords.longitude, this.userCords.latitude])
          .addTo(this.map)
          .setPopup(userPopup);
      }
    });
  }

  getDistance(
    userLat: any,
    userLong: any,
    stationLat: any,
    stationLong: any
  ): any {
    return (
      (userLat > stationLat ? userLat - stationLat : stationLat - userLat) +
      (userLong > stationLong ? userLong - stationLong : stationLong - userLong)
    );
  }

  setStationsMarkers() {
    fetch('https://miguel-ribera-backend-firebase.onrender.com/stations')
      .then((res) => res.json())
      .then((res) => {
        res.forEach((station: any) => {
          this.stations.push(station);

          var stationPopup = new tt.Popup().setHTML(
            `<div class="flex flex-col justify-center">
              <div class='flex justify-center items-center rounded w-full overflow-hidden'>
                <img class='rounded-3xl w-20 h-20' src='${station.image}' alt='' />
                <h3 class='text-xl p-5'>${station.address}</h3>
              </div>
            </div>
            `
          );

          stationPopup.on('open', () => {
            this.locationService.changeStation(station.address);
          });

          var stationMarker = document.createElement('div');
          stationMarker.className = 'custom-marker';
          stationMarker.style.backgroundImage =
            "url('../../assets/station-location.png')";

          new tt.Marker({ element: stationMarker })
            .setLngLat([parseFloat(station.longi), parseFloat(station.lat)])
            .addTo(this.map)
            .setPopup(stationPopup);
        });
      });
  }
}
