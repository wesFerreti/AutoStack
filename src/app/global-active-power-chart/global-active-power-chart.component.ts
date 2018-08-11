import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-global-active-power-chart',
  templateUrl: './global-active-power-chart.component.html',
  styleUrls: ['./global-active-power-chart.component.css']
})
export class GlobalActivePowerChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['WindPower', 'HidroPower', 'SolarPower'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}


