import { of, mergeMap, interval, map, Observer, take, fromEvent, takeUntil } from 'rxjs';
 
const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Completado')
}

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap((letter) => interval(1000).pipe(
    map(interval => letter + interval),
    take(3)
  ))
);
// result.subscribe(observer);

const mouseDown$ = fromEvent(document, 'mousedown'); 
const mouseUp$ = fromEvent(document, 'mouseup'); 
const interval$ = interval(); 

mouseDown$.pipe(
  //mergeMap emite el valor de la funcion de retorno que recibe y 
  // mantiene todas las suscripciones al tiempo
  mergeMap(()=>interval$.pipe(takeUntil(mouseUp$)))
).subscribe(console.log);