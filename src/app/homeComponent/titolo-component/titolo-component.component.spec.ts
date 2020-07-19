import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloComponentComponent } from './titolo-component.component';

describe('TitoloComponentComponent', () => {
  let component: TitoloComponentComponent;
  let fixture: ComponentFixture<TitoloComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitoloComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
