import { Component, OnInit  } from '@angular/core';
import { DataSimulatorService } from './service/data-simulator.service';
import { RouterOutlet } from '@angular/router';
import { MapaComponentComponent } from './mapa/mapa-component/mapa-component.component';
import { interval, Subscription } from 'rxjs';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, MapaComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  userName: string = '';
  userAge: number | null = null;
  isFormSubmitted: boolean = false;

  heartRate = 0;
  bodyTemperature = 0;
  oxygenLevel = 0;
  simulationRunning = false;
  menuOpen = false;
  showMap = false;
  private simulationSubscription!: Subscription;

  constructor(private dataSimulatorService: DataSimulatorService) {}

  ngOnInit(): void {
    this.startSimulation();
  }

  startSimulation(): void {
    this.simulationRunning = true;
    this.simulationSubscription = interval(1000).subscribe(() => {
      this.heartRate = this.dataSimulatorService.getHeartRate();
      this.bodyTemperature = this.dataSimulatorService.getBodyTemperature();
      this.oxygenLevel = this.dataSimulatorService.getOxygenLevel();
    });
  }

  stopSimulation(): void {
    this.simulationRunning = false;
    this.simulationSubscription.unsubscribe();
  }

  toggleSimulation(): void {
    this.simulationRunning ? this.stopSimulation() : this.startSimulation();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  showMapComponent(): void {
    this.showMap = true;
    this.menuOpen = false;
  }

  showMetricsComponent(): void {
    this.showMap = false;
    this.menuOpen = false;
  }
  
  submitForm() {
    if (this.userName && this.userAge !== null) {
      this.isFormSubmitted = true;
    }
  }

  onNameInput(event: Event): void {
    this.userName = (event.target as HTMLInputElement).value;
  }

  onAgeInput(event: Event): void {
    this.userAge = (event.target as HTMLInputElement).valueAsNumber;
  }
  
}
