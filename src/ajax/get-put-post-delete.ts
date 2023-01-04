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

// ajax.put(url, {
//   id: 1,
//   nombre: 'Deymer'
// }, {
//   'mi-token': 'ABC123',
// }).subscribe(console.log);

ajax({
  url: url,
  method: 'POST',
  headers: {
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    nombre: 'Deymer'
  }
}).subscribe(console.log);