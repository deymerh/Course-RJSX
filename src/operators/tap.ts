import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$.pipe(
  tap(x => console.log('Primera salida: ', x)),
  map(x => x * 10),
  tap(x => console.log('Segunda salida: ', x)),
).subscribe(console.log)