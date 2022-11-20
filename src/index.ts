import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>((subscriber) => {
  const intervaloDeNumeroAleatorio = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(intervaloDeNumeroAleatorio);
    console.log('clearInterval limpiado!');
  };
});

/**
 * 1- Casteo múltiple
 * 2- Tambien es un observer
 * 3- Puede manejar el next, error  complete  
 */

// const subs = intervalo$.subscribe(console.log);
// const subs = intervalo$.subscribe(console.log);

const subject$ = new Subject();
const subscriptionIntrval = intervalo$.subscribe(subject$);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscriptionIntrval.unsubscribe();
}, 3500);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);