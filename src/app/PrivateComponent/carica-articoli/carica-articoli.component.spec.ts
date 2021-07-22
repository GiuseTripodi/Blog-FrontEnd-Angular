import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaArticoliComponent } from './carica-articoli.component';

describe('CaricaArticoliComponent', () => {
  let component: CaricaArticoliComponent;
  let fixture: ComponentFixture<CaricaArticoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaArticoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
