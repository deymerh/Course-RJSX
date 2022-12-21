import { auditTime, fromEvent, map, tap } from 'rxjs';
// auditTime(intervalo de tiempo que quiero escuchar) => 
// emitie el ultimo valor que ha sido emitido por el 
// observbale en un tiempo determinado que especifiquemos

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  map(({x}) => x),
  tap((v)=> console.log(v)),
  // Emitimos el ultimo valor en el lapso de tiempo de 2 segundos
  auditTime(2000)
).subscribe((v) => console.log('Valor emitido: ', v));