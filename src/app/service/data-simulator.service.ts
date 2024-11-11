import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSimulatorService {

  getHeartRate(): number {
    return Math.floor(Math.random() * (120 - 60 + 1)) + 60; // Rango de 60-120 BPM
  }

  getBodyTemperature(): number {
    return parseFloat((Math.random() * (39 - 36) + 36).toFixed(1)); // Rango de 36-39°C
  }  

  getOxygenLevel(): number {
    return Math.floor(Math.random() * (100 - 90 + 1)) + 90; // Rango de 90-100%
  }
}
