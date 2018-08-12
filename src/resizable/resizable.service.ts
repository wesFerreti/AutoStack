import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizableService {

  constructor() { }



  private resizableWidth: string;
  private resizableLegendSize: number;
  private resizableTitle: number;

  public getResizableTitle(): number {
    return this.resizableTitle;
  }
  public getResizableWidth(): string {
    return this.resizableWidth;
  }

  public getResizableLegendSize(): number {
    return this.resizableLegendSize;
  }
  public getWindowSizeAndUpdateProperties(windowInnerWidth: number): void {

    if (windowInnerWidth <= 1200 && windowInnerWidth >= 600) {
      this.resizableLegendSize = 15;
      this.resizableWidth = "97%";

    } else if (windowInnerWidth < 600 && windowInnerWidth >= 400) {
      this.resizableTitle = 20;
      this.resizableLegendSize = 12;
      this.resizableWidth = "93%";
      
    } else if (windowInnerWidth < 400) {
      this.resizableTitle = 25;
      this.resizableLegendSize = 8;
      this.resizableWidth = "96%";
    }

    else {
      this.resizableLegendSize = 30;
      this.resizableWidth = "55%";
    }
  }
}
