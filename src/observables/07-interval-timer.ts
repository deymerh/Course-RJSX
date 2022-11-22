import { interval, timer } from "rxjs";

const CINCO_SEGUNDOS = 5;
const observer = {
  next: (value) => console.log('Next', value),
  complete: () => console.log('Complete'),
}

const despuesDeCincoSegundos = new Date();
despuesDeCincoSegundos.setSeconds(despuesDeCincoSegundos.getSeconds() + CINCO_SEGUNDOS)

//Ambos metodos son ASYNCRONOS
// const interval$ = interval(1000);
const timer$ = timer(despuesDeCincoSegundos);

console.log('Start');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('End');
