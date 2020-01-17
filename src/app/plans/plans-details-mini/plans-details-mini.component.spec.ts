import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDetailsMiniComponent } from './plans-details-mini.component';

describe('PlansDetailsMiniComponent', () => {
  let component: PlansDetailsMiniComponent;
  let fixture: ComponentFixture<PlansDetailsMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansDetailsMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansDetailsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
