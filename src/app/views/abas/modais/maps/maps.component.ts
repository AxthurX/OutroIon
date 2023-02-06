/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
/* eslint-disable new-parens */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
  MyLocation,
} from '@ionic-native/google-maps';
import { LoadingController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Util } from '../../../../core/util.model';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();
  bounds = new google.maps.LatLngBounds();
  service = new google.maps.DistanceMatrixService();
  first = new google.maps.LatLng(-8.752294744031344, -63.88957875133141);
  second = new google.maps.LatLng(-8.775739316159868, -63.86224065611681);
  waypoints: any;
  waypts: any;
  origem: any;
  destinos: any;
  directionDisplay: any;
  map: any;
  markers: any;

  locais: Agenda[] = [
    {
      nome: 'Teste 1',
      endereco: 'Endereço 2',
      latitude: -8.752294744031344,
      longitude: -63.88957875133141,
    },
    {
      nome: 'Teste 2',
      endereco: 'Endereço 3',
      latitude: -8.766418874841028,
      longitude: -63.88170378567325,
    },
    {
      nome: 'Casa do yag',
      endereco: 'Endereço 5',
      latitude: -8.775739316159868,
      longitude: -63.86224065611681,
    },
    {
      nome: 'Bar do ceara',
      endereco: 'Endereço 6',
      latitude: -8.775792332331505,
      longitude: -63.862315757969036,
    },
    {
      nome: 'Teste 3',
      endereco: 'Endereço 7',
      latitude: -8.777376633132329,
      longitude: -63.878352028836304,
    },
    {
      nome: 'Flush',
      endereco: 'Endereço 8',
      latitude: -8.7595359969729,
      longitude: -63.89546933317347,
    },
    {
      nome: 'Minha casa',
      endereco: 'Endereço 1',
      latitude: -8.795407919988488,
      longitude: -63.880500991403956,
    },
  ];

  constructor(
    private platform: Platform,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.geolocation
        .getCurrentPosition()
        .then((result) => {
          this.loadMap(result.coords.latitude, result.coords.longitude);
        })
        .catch((e) => {
          console.log('erro ao pegar a localozação');
          Util.TratarErro(e);
        });
    });
    //this.loadMap(-8.759574235374517, -63.891267252769175);
  }

  async loadMap(lat, lng) {
    const latLng = new google.maps.LatLng(lat, lng);

    const mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };

    const element = document.getElementById('map');
    this.map = new google.maps.Map(element, mapOptions);

    this.directionsRenderer.setMap(this.map);

    const marker = new google.maps.Marker({
      position: latLng,
      title: 'Minha Localização',
      animation: google.maps.Animation.DROP,
      icon:
        'https://chart.googleapis.com/chart?' +
        'chst=d_map_pin_letter&chld=N|FCB40A|000000',
    });
    const content =
      `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>` +
      marker.title +
      `</h6>
            </ion-row>
          </ion-item>
        </div>
      `;

    /* this.infoMarker(marker, content); */
    marker.setMap(this.map);
    this.carregaMarcadores(lat, lng);
    this.CalcularETracarRotas();
  }

  async carregaMarcadores(Lat, Lng) {
    this.markers = [];
    try {
      for (const key of Object.keys(this.locais)) {
        this.origem = { lat: Lat, lng: Lng };
        this.destinos = {
          lat: this.locais[key].latitude,
          lng: this.locais[key].longitude,
        };
        this.waypoints = [
          { location: this.first, stopover: true },
          { location: this.second, stopover: true },
        ];
      }
    } catch (e) {
      for (const key of Object.keys(this.locais)) {
        const latLng = new google.maps.LatLng(
          this.locais[key].latitude,
          this.locais[key].longitude
        );
        const marker = new google.maps.Marker({
          position: latLng,
          title: this.locais[key].nome,
        });

        const content =
          `
          <div id="myid" class="item item-thumbnail-left item-text-wrap">
            <ion-item>
              <ion-row>
                <h6>` +
          this.locais[key].nome +
          `</h6>
              </ion-row>
            </ion-item>
          </div>
        `;

        this.infoMarker(marker, content);
        marker.setMap(this.map);
        return this.markers;
      }
      Util.TratarErro(e);
    }
  }

  infoMarker(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('myid').addEventListener('click', () => {
          this.goToEmpresa(marker);
        });
      });
    });
  }

  goToEmpresa(empresa) {
    for (const key of Object.keys(this.locais)) {
      console.log('Click');
    }
  }

  async CalcularETracarRotas() {
    const simboloLinha = {
      path: 'M 1.5 1 L 1 0 L 1 2 M 0.5 1 L 1 0',
      fillColor: 'black',
      strokeColor: 'black',
      strokeWeight: 2,
      strokeOpacity: 1,
      fillOpacity: 1,
      scale: 3,
    };

    const polilinha = {
      strokeColor: '#426289',
      strokeOpacity: 0.8,
      strokeWeight: 5,
      fillOpacity: 1,
      draggable: false,
      icons: [
        {
          icon: simboloLinha,
          offset: '25',
          repeat: '100px',
        },
      ],
    };

    const rendererOptions = {
      map: this.map,
      suppressMarkers: false,
      polylineOptions: polilinha,
    };

    const directionsDisplay = new google.maps.DirectionsRenderer(
      rendererOptions
    );

    const request = {
      origin: this.origem,
      destination: this.destinos,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: this.waypoints,
      optimizeWaypoints: true,
    };
    this.directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  addMarkersToMap() {
    for (let marker of this.locais) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position,
        title: marker.nome,
        latitude: marker.latitude,
        longitude: marker.longitude,
      });
    }
  }
}

export class Agenda {
  nome: string;
  endereco: string;
  latitude: number;
  longitude: number;
}
