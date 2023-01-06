import { fromEvent, tap, map, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, switchMap, exhaustMap } from 'rxjs/operators';
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputpaswword = document.createElement('input');
const buttonSumit = document.createElement('button');

// helper
const login = (userAndPassword: any) => 
  ajax.post('https://reqres.in/api/login', userAndPassword)
      .pipe(
        map(({response})=>response['token']),
        catchError((err)=> of('xxx'))
      )

//Settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputpaswword.type = 'password';
inputpaswword.placeholder = 'Password';
inputpaswword.value = 'cityslicka';

buttonSumit.innerHTML = 'Ingresar';

form.append(inputEmail, inputpaswword, buttonSumit);
document.querySelector('body').append(form);

//Streams
const formSubmit$ = fromEvent<SubmitEvent>(form, 'submit')
  .pipe(
    //tap = evento secuendario que no modifica el flujo informacion del observable
    tap((event) => event.preventDefault()),
    tap((event) => console.log({event})),
    map((event)=>({
      email: event.target[0].value,
      password: event.target[1].value,
    })),
    // mergeMap(login),
    // switchMap(login),
    exhaustMap(login),
  );

formSubmit$.subscribe(console.log);