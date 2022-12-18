import { first, fromEvent, Observer, tap, map } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.log(error),
  complete: () => console.info('Ok')
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  // Con first puedo emitir solo la primera emision del observable
  // y tambien puedo mandarle un funcion/condicional para que envíe la emision

  // === desestructurando la data que necesito ====
  tap<MouseEvent>(() => console.log('El tap')),
  map(({clientX, clientY})=>({clientX, clientY})),
  // first<{clientX, clientY}>((value) => value.clientY >= 200)
)
.subscribe(observer);