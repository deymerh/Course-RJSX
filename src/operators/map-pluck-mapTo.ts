import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5)
//   .pipe(map(value => value * 10))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
// keyup$.pipe(map((evt) => evt.key)).subscribe((key) => console.log('La tecla es: ', key));
// keyup$.pipe(pluck<KeyboardEvent>('key')).subscribe((key) => console.log('La tecla es: ', key));
keyup$.pipe(mapTo('Hola!')).subscribe((key) => console.log('La tecla es: ', key));
