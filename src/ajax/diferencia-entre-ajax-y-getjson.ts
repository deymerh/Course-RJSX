import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const handleError = (err: AjaxError) => {
  console.warn('Error: ', err.message);
  return of({
    ok: false,
    usuarios: []
  });
};

// ajax(url).pipe(catchError(handleError)).subscribe(console.log);

ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123'
}).pipe(
  // Cuando manejamos en error en con el catchError en el pipe
  // no se dispara el error del susbscribe
  catchError(handleError))
  .subscribe({
    next: (value) => console.log('Next: ', value),
    error: (err) => console.log('Error: ', err),
    complete: () => console.log('Complete')
  });


