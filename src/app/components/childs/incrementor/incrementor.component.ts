import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent implements OnInit {

  constructor() {

   }
  @Input() progress: number = 0;
  @Input() progress2: number = 0;
  @Input() legend: string = '';
  @Output() valuesChange: EventEmitter<number> = new EventEmitter();
  @ViewChild('elementRef') element: ElementRef;
  ngOnInit() {

  }
  incrementProgress(eventType: string): any {
    switch (eventType) {
      case 'sum':
        if (this.validatorSum()) {
          this.progress += 5;
          this.valuesChange.emit(this.progress);
        }
      break;
      case 'rest':
        if (this.validatorProgress()) {
          this.progress -= 5;
          this.valuesChange.emit(this.progress);
        }
      break;
    }
   }
   validatorProgress(): boolean {
      if (this.progress >= 0 && this.progress !== 0) {
        return true;
      } else {
        return false;
      }

   }
   validatorSum(): boolean {
    if (this.progress <= 100 && this.progress > 0) {
      return true;
    } else {
      return false;
    }
   }
   inputChanges(newValue: number) {
     // const input: any = document.getElementsByName('incrementor')[0];
     if ( newValue >= 100 ) {
       this.progress = 100;
     } else {
       if (newValue <= 0) {
         this.progress = 0;
       } else {
         this.progress = newValue;
       }
       // input.value = Number(this.progress);
       this.element.nativeElement.value = this.progress;
       this.valuesChange.emit(this.progress);
     }
   }

}
