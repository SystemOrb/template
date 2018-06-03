import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.promiseTest().then(boolean => {
      console.log('Promesa terminada' + boolean);
    }).catch( err => {
      console.error('Promesa fallida ' + err);
    });
  }
  promiseTest(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let flag = 0;
      const promise = setInterval(
        () => {
          flag += 1;
          console.log(flag);
          if (flag === 5) {
            resolve(true);
            clearInterval(promise);
          }
        }, 1000
      );
    });
  }

}
