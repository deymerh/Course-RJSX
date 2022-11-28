import { from, interval, reduce, scan, take, tap, map } from 'rxjs';

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;
const numeros = [1, 2, 3, 4, 5];
//Reduce
from(numeros)
  .pipe(
    reduce(totalReducer)
  )
  .subscribe({
    next: console.log,
    complete: () => console.log('complete')
  });
//Scan
// El scan es un reduce con la ventaja de SI emite el valor acumulado
from(numeros)
  .pipe(
    scan(totalReducer)
  )
  .subscribe({
    next: (x) => console.log('Next: ', x),
    complete: () => console.log('complete')
  });
//Redux
interface User {
  id: string;
  auth: boolean;
  token: string;
  edad: number;
};
const user: User[] = [
  { id: '321', auth: false, edad: 35, token: 'PPP' },
  { id: '000', auth: false, edad: 18, token: 'PPP' },
  { id: '123', auth: false, edad: 32, token: 'XXX-AAA-PPP' },
];
const state$ = from(user);
state$.pipe(
  scan<User>((acc, cur) => {
    return { ...acc, ...cur }
  }),
  map((state) => {
    return state.token
  })
).subscribe(console.log);