import { ajax, AjaxError } from 'rxjs/ajax';
import { map, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const handleErrors = (response: Response)=>{
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response;
}

const fetchPromise = fetch(url);

fetchPromise
  // .then((response) => response.json())
  // .then((response)=>console.log(response))
  // .catch((err) => console.log('Error en usuarios: ', err))

  // .then(handleErrors)
  // .then((response)=>response.json)
  // .then((response)=>console.log(response))
  // .catch((err) => console.warn('Error en usuarios: ', err))

ajax(url).pipe(
  map(({response}) => response),
  // pluck('response')
  catchError((err: AjaxError)=>{
    console.error('Error: ', err)
    return of([])
  })
).subscribe(users => console.log('Usuarios: ', users));