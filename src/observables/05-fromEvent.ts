import { fromEvent } from "rxjs";

const eventClick$ = fromEvent<MouseEvent>(document, 'click');
const eventKeyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (value) => console.log('Next', value)
}

eventClick$.subscribe(({ x, y }) => console.log(x, y));
eventKeyup$.subscribe((event) => {
  console.log(event.key);
});