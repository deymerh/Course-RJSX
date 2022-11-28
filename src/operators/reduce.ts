import { interval, reduce, take, tap } from "rxjs";

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;
const numeros = [1, 2, 3, 4, 5];
const total = numeros.reduce(totalReducer, 0);
console.log(total);

interval(1000).pipe(
  take(5),
  tap(console.log),
  reduce(totalReducer, 0),
).subscribe({
  next: console.log,
  complete: () => console.log('complete')
});