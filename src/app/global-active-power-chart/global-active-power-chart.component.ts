import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ResizableService } from '../resizable/resizable.service';

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
  constructor(private resizableService: ResizableService) {
  }

  ngOnInit() {
    this.chartPluginForMiddleText()
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
      elements: {
        center: {
          text: '750' + 'MW',
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


  public chartPluginForMiddleText() {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          var ctx = chart.chart.ctx;

          //Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Arial';
          var txt = centerConfig.text;
          var color = centerConfig.color || '#000';
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          //Start with a base font of 30px
          ctx.font = "30px " + fontStyle;

          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight);

          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          //Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      }
    });
  }

}