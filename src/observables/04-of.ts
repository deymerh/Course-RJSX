import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6, 7);
// const obs$ = of([1, 2, 3, 4, 5, 6, 7]);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

// El metodo of para crear un observable trabaja de forma sincrona

console.log("Start Obs$");
obs$.subscribe(
  next => console.log("Next", next),
  null,
  () => console.log('Complete sequence')
)
console.log("End Obs$");