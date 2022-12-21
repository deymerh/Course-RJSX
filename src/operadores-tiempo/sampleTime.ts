import { fromEvent, map, sampleTime } from 'rxjs';

// Obtener el último valor emitido de un observable en un intervalo de tiempo
const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
  sampleTime(2000),
  map(({x,y}) => ({x,y}))
).subscribe(console.log);