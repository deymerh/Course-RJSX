import { fromEvent, map, combineLatest } from 'rxjs';

// const click$ = fromEvent(document, 'click');
// const keyup$ = fromEvent(document, 'keyup');

// combineLatest(
//   click$.pipe(map((event) => event.type)),
//   keyup$.pipe(map((event) => event.type))
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'deymerh@hotmail.com';
input2.placeholder = '*************';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (element:HTMLElement) =>
  fromEvent<KeyboardEvent>(element, 'keyup')
  .pipe(map<KeyboardEvent, string>((event) => event.target['value']));

combineLatest(
  getInputStream(input1),
  getInputStream(input2),
).subscribe(console.log);