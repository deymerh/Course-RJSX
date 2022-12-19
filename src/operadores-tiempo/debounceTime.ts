import { debounceTime, fromEvent, distinctUntilChanged } from 'rxjs';
import { pluck } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click');

clicks$.pipe(debounceTime(2000)).subscribe(console.log);

const input =  document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    debounceTime(2000),
    pluck('target', 'value'),
    distinctUntilChanged()).subscribe(console.log);