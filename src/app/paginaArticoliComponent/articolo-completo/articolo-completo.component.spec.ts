import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloCompletoComponent } from './articolo-completo.component';

describe('ArticoloCompletoComponent', () => {
  let component: ArticoloCompletoComponent;
  let fixture: ComponentFixture<ArticoloCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoloCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoloCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
