import { fromEvent, interval, mergeMap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Los operadores de tranformacion o aplanamiento se suscriben al observable 
// y emiten el valor correrpondiente

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
  // la diferencia entre los dos es que switchMap mantiene solo una 
  // suscripción activa mientra que mergeMpa las mantiene todas al tiempo
  switchMap(()=>interval$),
  // mergeMap(()=> interval$)
).subscribe(console.log);