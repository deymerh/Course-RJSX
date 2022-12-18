import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';
import { observer } from '../utils/util';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const source$ = interval(1000);
const clicks$ = fromEvent(boton, 'click')
.pipe(
  // Con el skip dejo de emitir el numero de veces que elija
  tap(()=>console.log('Click antes del tap')),
  skip(1),
  tap(()=>console.log('Click despues del tap')),
);
// === takeUntil recibe un observable como parametro ====
// Con takeUntil emito valores en el observable hasta que el observable
// enviado como parametro emita un valor, allì se completa
const result$ = source$.pipe(takeUntil(clicks$));

result$.subscribe(observer);