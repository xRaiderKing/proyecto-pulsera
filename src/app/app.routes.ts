import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapaComponentComponent } from './mapa/mapa-component/mapa-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/metrics', pathMatch: 'full' },
  { path: 'metrics', component: AppComponent },
  { path: 'map', component: MapaComponentComponent },
  { path: '**', redirectTo: '/metrics' }
];
