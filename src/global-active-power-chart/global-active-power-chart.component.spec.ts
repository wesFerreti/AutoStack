import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalActivePowerChartComponent } from './global-active-power-chart.component';

describe('GlobalActivePowerChartComponent', () => {
  let component: GlobalActivePowerChartComponent;
  let fixture: ComponentFixture<GlobalActivePowerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalActivePowerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalActivePowerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
