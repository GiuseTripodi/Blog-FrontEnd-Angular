import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloItemComponent } from './articolo-item.component';

describe('ArticoloItemComponent', () => {
  let component: ArticoloItemComponent;
  let fixture: ComponentFixture<ArticoloItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticoloItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticoloItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
