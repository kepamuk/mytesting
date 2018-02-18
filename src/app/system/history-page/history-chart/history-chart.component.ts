import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

  view: any[] = [700, 400];
  @Input() dataChart;

  showLabels = true;
  explodeSlices = false;

  constructor() {

  }

  ngOnInit() {

  }

}
