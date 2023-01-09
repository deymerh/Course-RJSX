import { fromEvent, merge, map } from 'rxjs';

const click$ = fromEvent(document, 'click');
const keyup$ = fromEvent(document, 'keyup');

merge(
  click$.pipe(map((event) => event.type)),
  keyup$.pipe(map((event) => event.type))
).subscribe(console.log);