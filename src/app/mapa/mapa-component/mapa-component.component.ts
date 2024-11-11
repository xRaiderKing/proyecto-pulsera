import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa-component.component.html',
  styleUrl: './mapa-component.component.css'
})
export class MapaComponentComponent implements OnInit{
  private map!: mapboxgl.Map;

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    // Coordenadas de la Universidad Tecnológica del Norte de Guanajuato
    const latitude = 21.1680883;
    const longitude = -100.9305513;

    // Inicializar el mapa centrado en la ubicación específica
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoieHJhaWRlciIsImEiOiJjbTJzbzF6cWwxZG4zMmtwdHBiejlxaXN1In0.OmxNUluNtN0g-hpwMbu4lQ',  // Reemplaza con tu token de Mapbox
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude], // Usando las coordenadas específicas
      zoom: 14
    });

    // Agregar un marcador en la ubicación de la universidad
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(this.map);
  }
}
