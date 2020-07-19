import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoliPrincipaliComponentComponent } from './articoli-principali-component.component';

describe('ArticoliPrincipaliComponentComponent', () => {
  let component: ArticoliPrincipaliComponentComponent;
  let fixture: ComponentFixture<ArticoliPrincipaliComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoliPrincipaliComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoliPrincipaliComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
