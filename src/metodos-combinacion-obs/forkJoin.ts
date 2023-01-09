import { delay, of, interval, take, forkJoin } from 'rxjs';

const numbers$   = of(1,2,3);//El of es sincrono
const intervals$ = interval(1000).pipe(take(3));//0..1..2
const letters$   = of('a', 'b', 'c').pipe(delay(3500));

forkJoin({
  numeros: numbers$,
  intervalos: intervals$,
  letras: letters$
}).subscribe(console.log);

