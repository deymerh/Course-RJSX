import { from, of } from "rxjs";

// const sourceOf$ = of([1, 2, 3, 4, 5, 6, 7]);
// const sourceFrom$ = from([1, 2, 3, 4, 5, 6, 7]);
const observer = {
  next: (value) => console.log('Next', value),
  complete: () => console.log('Complete'),
}
// sourceOf$.subscribe(observer);
// sourceFrom$.subscribe(observer);

// const getInfoGithub = from<Promise<Response>>(fetch('https://api.github.com/users/deymerh'));
// getInfoGithub.subscribe(async (response) => {
//   const data = await response.json()
//   console.log(data);
// });

const generador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}
const miGenerador = generador();
// for (let i of miGenerador) {
//   console.log(i);
// }
from(miGenerador).subscribe(observer);