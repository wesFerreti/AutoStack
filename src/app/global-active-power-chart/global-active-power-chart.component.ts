import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-global-active-power-chart',
  templateUrl: './global-active-power-chart.component.html',
  styleUrls: ['./global-active-power-chart.component.css']
})
export class GlobalActivePowerChartComponent implements OnInit {

  WindPlantActivePower: number = 300;
  HidroPlantActivePower: number = 100;
  SolarPlantActivePower:number = 400;
  breakpoint;
  rowHeights;
  constructor() { }

  ngOnInit() {
      console.log(window.innerWidth);
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
      this.rowHeights = (window.innerWidth <= 400) ? 500 : 800;
      console.log(this.rowHeights);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    this.rowHeights = (event.target.innerWidth <= 400) ? 500: 800;
  }
  public doughnutChartLabels:string[] = ['WindPower', 'HidroPower', 'SolarPower', 'NotGenerating'];
  public doughnutChartData:number[] = [this.WindPlantActivePower, this.HidroPlantActivePower,this.SolarPlantActivePower,222];
  public doughnutChartType:string = 'doughnut';
  
  public chartColors: any[] = [
    { 
      backgroundColor:["#b99dea", "#9e79e0", "#7a49d1"] 
      
    }];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}


