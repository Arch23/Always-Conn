import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDetailsContentComponent } from './plans-details-content.component';

describe('PlansDetailsContentComponent', () => {
  let component: PlansDetailsContentComponent;
  let fixture: ComponentFixture<PlansDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
