// sanple emite el ultimo valor emitido por el observable hasta que 
// el observable enviado como parametro en el operador sample emite un valor
// es una convinacion de observables

import { interval, fromEvent, sample, pipe, map } from 'rxjs';

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$),
).subscribe((v)=>console.log('Valor emitido: ', v));