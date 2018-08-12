import { Component, OnInit } from '@angular/core';
import { ResizableService } from '../resizable/resizable.service';

@Component({
  selector: 'app-global-energy-delivered',
  templateUrl: './global-energy-delivered.component.html',
  styleUrls: ['./global-energy-delivered.component.css']
})
export class GlobalEnergyDeliveredComponent implements OnInit {
  public resizableWidth: string = "100%";
  public totalEnergyDeliveredAnually: number = 5000;
  public anualGoal: number = 10000;

  public horizontalBarChartLabels: string[];
  public horizontalBarChartData: number[];
  public horizontalBarChartType: string;
  public horizontalBarChartOptions: any;
  public horizontalBarChartColors: any[];
  
  constructor(private resizableService: ResizableService) { }

  ngOnInit() {
    this.horizontalBarChartColors = [{ backgroundColor: ["#b99dea", "#9e79e0"] }];
    this.horizontalBarChartLabels = ['Energia', 'Meta'];
    this.horizontalBarChartData = [this.totalEnergyDeliveredAnually, this.anualGoal, 0, 50000];
    this.resizableService.getWindowSizeAndUpdateProperties(window.innerWidth);
    this.resizableWidth = this.resizableService.getResizableWidth();
    this.updateChartOptions();
  }

  onResize($event) {
    this.resizableService.getWindowSizeAndUpdateProperties(window.innerWidth);
    this.resizableWidth = this.resizableService.getResizableWidth();
    this.updateChartOptions();
  }


  public updateChartOptions() {
    this.horizontalBarChartOptions = {
      responsive: true,
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              fontSize: this.resizableService.getResizableLegendSize()
            }
          }
        ],
        xAxes: [
          {
            display: true,
            ticks: {
              fontSize: this.resizableService.getResizableLegendSize()
            }
          }
        ]
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          fontSize: this.resizableService.getResizableLegendSize,
          padding: 30
        }
      },
      tooltips: {
        custom: function (tooltip) {
          if (!tooltip) return;
          // disable displaying the color box;
          tooltip.displayColors = false;
        },
        callbacks: {
          // use label callback to return the desired label
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel + " :" + tooltipItem.yLabel;
          },
          // remove title
          title: function (tooltipItem, data) {
            return;
          }
        }
      }
    }
  }


}
