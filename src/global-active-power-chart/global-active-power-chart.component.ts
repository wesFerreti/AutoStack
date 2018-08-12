import { Component, OnInit } from '@angular/core';
import { ResizableService } from '../resizable/resizable.service';
import { ChartPluginsService } from '../plugins/chart-plugins.service';

@Component({
  selector: 'app-global-active-power-chart',
  templateUrl: './global-active-power-chart.component.html',
  styleUrls: ['./global-active-power-chart.component.css']
})
export class GlobalActivePowerChartComponent implements OnInit {

  //General properties
  public WindPlantActivePower: number = 300;
  public HidroPlantActivePower: number = 400;
  public SolarPlantActivePower: number = 400;
  public totalPlantNominalPower: number = 1000;

  //Chart properties
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string;
  public dougnutChartOptions: any;
  public chartColors: any[];
  public resizableWidth;
  public windowSize: number;
  constructor(private resizableService: ResizableService, private chartPluginService: ChartPluginsService) {
  }

  ngOnInit() {
    this.chartPluginService.chartPluginForMiddleText()
    this.chartColors = [{ backgroundColor: ["#b99dea", "#9e79e0", "#7a49d1"] }];
    this.doughnutChartType = 'doughnut';
    this.doughnutChartLabels = ['Eólicas', 'PCHs', 'Solar', 'Sem geração'];
    this.windowSize = window.innerWidth;
    this.doughnutChartData = [this.WindPlantActivePower, this.HidroPlantActivePower, this.SolarPlantActivePower, 1000 - (this.SolarPlantActivePower + this.HidroPlantActivePower + this.WindPlantActivePower)];
    this.resizableService.getWindowSizeAndUpdateProperties(window.innerWidth);
    this.resizableWidth = this.resizableService.getResizableWidth();
    this.updateChartOptions();
  }

  public onResize(event) {
    this.resizableService.getWindowSizeAndUpdateProperties(window.innerWidth);
    this.resizableWidth = this.resizableService.getResizableWidth();
    this.updateChartOptions();
  }

  public updateChartOptions() {
    this.dougnutChartOptions = {
      tooltips: {
        custom: function (tooltip) {
          if (!tooltip) return;
          // disable displaying the color box;
          tooltip.displayColors = true;
        },
        callbacks: {
          // use label callback to return the desired label
          label: function (tooltipItem, data) {
            for (let index = 0; index < data.labels.length; index++) {
              if (index == tooltipItem.index){
                tooltipItem.xlabel = data.labels[index] + ": "+ data.datasets[0].data[index] + " MW";
              }
            }
            return tooltipItem.xlabel;
          },
          // remove title
          title: function (tooltipItem, data) {
            return "Potência ativa";
          }
        }
      },

      elements: {
        center: {
          text: this.totalPlantNominalPower + 'MW',
          color: '#a4a4a5', //Default black
          fontStyle: 'Helvetica', //Default Arial
          sidePadding: 15 //Default 20 (as a percentage)
        }
      },
      title: {
        display: true,
        text: 'Potência instalada:' + this.totalPlantNominalPower + 'MW',
        fontSize: 30,
        position: 'top'

      },
      responsive: true,
      legend: {
        position: 'right',
        labels: {
          fontSize: this.resizableService.getResizableLegendSize(),
          padding: 20
        }
      }
    }
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  

}