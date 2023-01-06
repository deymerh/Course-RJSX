import { interval, fromEvent, take } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
// concatMap para concatenar observables resultantes
// siempre lo concatena al final
// los observables van en secuencia, cuando uno se completa sigue el sieguiente
// y asi sucesivamente

const interval$ = interval(500).pipe(take(3));
const click$    = fromEvent(document, 'click');

click$.pipe(
  //Los observables se ejecutan uno despues del otro en orden de llegada
  concatMap(()=>interval$),
).subscribe(console.log);