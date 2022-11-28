import { from, fromEvent, range } from "rxjs";
import { map, filter } from 'rxjs/operators';

// range(1, 10).pipe(filter((val) => val % 2 === 1)).subscribe(console.log);

const personajes = [
  {
    nombre: 'Tiago',
    tipo: 'Hijo'
  },
  {
    nombre: 'Nure',
    tipo: 'Esposa'
  },
  {
    nombre: 'Lorem',
    tipo: 'Hijo'
  }
]

// const hijos = personajes.filter((personaje) => personaje.tipo === 'Hijo');
// console.log(hijos);
// from(personajes).pipe(filter((persona) => persona.tipo === 'Hijo')).subscribe(console.log);
const keyBoardEvent$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((evet) => evet.code),
  filter((key) => key === 'Enter')
)
keyBoardEvent$.subscribe(console.log);