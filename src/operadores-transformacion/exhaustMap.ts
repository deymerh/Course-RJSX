
import { interval, fromEvent, take } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$    = fromEvent(document, 'click');

click$.pipe(
  // Proyecta cada valor de origen a un Observable que se fusiona en el Observable de
  // salida solo si el Observable proyectado anterior se ha completado.
  // para evitar spamer de información
  exhaustMap(()=>interval$),
).subscribe(console.log);