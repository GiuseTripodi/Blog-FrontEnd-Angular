import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArticoloVistaComponent } from './home-articolo-vista.component';

describe('HomeArticoloVistaComponent', () => {
  let component: HomeArticoloVistaComponent;
  let fixture: ComponentFixture<HomeArticoloVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticoloVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticoloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
