import { of, from, distinctUntilKeyChanged } from 'rxjs';

const numeros$ = of(1,2,0,4,3,2,9,2,4,5,7,5,6,7,0,9,1);

numeros$
.pipe(
  distinctUntilKeyChanged('toPrecision'),
)
.subscribe(console.log);

const reyes$ = from<{nombre:string}[]>([
  {
    nombre: 'David',
  },
  {
    nombre: 'salomon',
  },
  {
    nombre: 'saul',
  },
  {
    nombre: 'Nabucodosor',
  },
  {
    nombre: 'saul',
  },
  {
    nombre: 'saul',
  },
  {
    nombre: 'Nabucodosor',
  },
]);

reyes$.pipe(
  distinctUntilKeyChanged('nombre')
).subscribe(console.log);