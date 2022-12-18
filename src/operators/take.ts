import { of, take } from 'rxjs';

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
  //Corta la emision del observable y lo completa
  take(3)
).subscribe(console.log)