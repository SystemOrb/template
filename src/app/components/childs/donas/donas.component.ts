import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styles: []
})
export class DonasComponent implements OnInit {
  @Input() doughnutChartLabels: string[];
  @Input() doughnutChartData: number[];
  @Input() doughnutChartType: string;
  @Input() leyenda: string = '';
  @Input() arrayGet: any;
  constructor() { }

  ngOnInit() {
    this.doughnutChartData = this.arrayGet.data;
    this.doughnutChartLabels = this.arrayGet.labels;
    this.doughnutChartType = this.arrayGet.type;
    this.leyenda = this.arrayGet.leyenda;
  }

}
