// Range crea un observable que emite una secuecia numeros en base a un rango,
// por defecto son sincronos pero se pueden trasnformar en asincronos 
// usando un async scheduler

import { asyncScheduler, range } from "rxjs";
// El primer valor es el valor inicial
// Y el segundo valor son la cantidad de emisiones que quiero

const obs$ = range(1, 5, asyncScheduler);

console.log('Start');
obs$.subscribe(console.log);
console.log('End');
