import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress: number = 30;
  progress2: number = 10;
  legend: string = '';
  constructor() {

   }

  ngOnInit() {
    console.log(this.progress);
  }
  progression(eventNumber: number) {
    console.log(eventNumber);
  }

}
