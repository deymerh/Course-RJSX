import { fromEvent, map, takeWhile } from 'rxjs';
import { observer } from '../utils/util';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  map(({x,y})=>({x, y})),
  // takeWhile(({y})=> y <= 150)
  // takeWhile no emite la ultima emision del observable cuando se completa
  //si la quiero debo enviarle un un 'true' como utimo parametro
  takeWhile(({y})=> y <= 150, true)
)
.subscribe(observer)