import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaccoltaArticoliComponentComponent } from './raccolta-articoli-component.component';

describe('RaccoltaArticoliComponentComponent', () => {
  let component: RaccoltaArticoliComponentComponent;
  let fixture: ComponentFixture<RaccoltaArticoliComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaccoltaArticoliComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaccoltaArticoliComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
