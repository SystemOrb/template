import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
     this.subscription = this.createObservable().pipe(
     retry(2) ).subscribe(
      (status: number) => {
        console.log(status);
      }, (err: string) => console.error('No puede cargar la data'),
      () => console.log('El ciclo de vida del observable termino')
    );
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Destruimos el servicio hasta que volvamos');
  }
  createObservable(): Observable<any> {
    return new Observable(
       (observer: Subscriber<any>) => {
         let flag = 0;
         const interval = setInterval(
           () => {
            flag++;

            const value = {
              flag: flag
            };
            observer.next(value);
           /* if (flag === 3) {
              clearInterval(interval);
              observer.complete();
            }
            if (flag === 2) {
              clearInterval(interval);
              observer.error(' Error reinicializando el programa ');
            }*/
           }, 1000
         );
    }).pipe(
      map( (countObject) => {
        return countObject.flag;
      }),
      filter((value, index): boolean => {
          if ((value % 2) === 1) {
            return true;
          } else {
            return false;
          }
      })
    );
  }

}
