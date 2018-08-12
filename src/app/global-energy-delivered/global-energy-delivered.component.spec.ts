import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEnergyDeliveredComponent } from './global-energy-delivered.component';

describe('GlobalEnergyDeliveredComponent', () => {
  let component: GlobalEnergyDeliveredComponent;
  let fixture: ComponentFixture<GlobalEnergyDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalEnergyDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalEnergyDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
