import { distinct, of, from, distinctUntilChanged } from 'rxjs';

const numeros$ = of(1,2,0,4,3,2,9,2,4,5,7,5,6,7,0,9,1);

numeros$
.pipe(
  //distinct() emite valores que NUNCA se hayan emitidi previamente
  // y usa el === para no dejar pasar los valores que ya han sido emitidis
  // distinctUntilChanged() emite valores siempre y cuando LA EMISION ANTERIOR no sea la mismo
  distinctUntilChanged()
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
  //como distinct usa el ===, en objetos no funciona por que cada
  // objeto ocupa un espacio distinto en memoria por lo tanto no son iguales
  // se debe enviar una funcion como predicado y especificarle lo que debe hacer
  distinct((rey) => rey.nombre)
).subscribe(console.log);