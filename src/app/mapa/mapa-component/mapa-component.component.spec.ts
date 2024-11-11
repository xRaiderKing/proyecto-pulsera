import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaComponentComponent } from './mapa-component.component';

describe('MapaComponentComponent', () => {
  let component: MapaComponentComponent;
  let fixture: ComponentFixture<MapaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
