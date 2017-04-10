import { Component, OnInit} from '@angular/core';
declare var google: any;
@Component({
  selector: 'chart'
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded: any;

  constructor(){
      console.log('Here is GoogleChartComponent');
  }

  getGoogle() {
      return google;
  }
  ngOnInit() {
    console.log('ngOnInit');
    if (!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'line']});
      google.charts.load('current',  {packages: ['corechart', 'pie']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      console.log('DrawGraph base class!!!! ');
  }

  createLineChart(element: any): any {
      return new google.visualization.LineChart(element);
  }

   createPieChart(element: any): any {
        return new google.visualization.PieChart(element);
  }

  createDataTable(array: any[]): any {
      return new google.visualization.arrayToDataTable(array);
  }


}