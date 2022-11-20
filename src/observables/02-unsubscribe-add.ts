import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>((subscriber) => {
  let numero = 0;
  const intervalo = setInterval(() => {
    subscriber.next(numero++);
    console.log(numero);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(intervalo);
    console.log('Intervalo detenido');
  }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
subs2.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();
  console.log('Completado timeout.');
}, 3000);


// Nota: el unsubscribe no es lo mismo que el complete de observable.