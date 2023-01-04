import { fromEvent, debounceTime, map, Observable, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { mergeAll, pluck, catchError } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResponse } from '../interfaces/github-users.interfaces';

// Referens
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderlIst = document.createElement('ol');

body.append(textInput, orderlIst);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// helpers
const showUsers = (users: GithubUser[]) => {
  if(!users){
    return
  }
  for(const user of users){
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_black';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);
    orderlIst.append(li);
  }
}

input$.pipe(
  debounceTime<KeyboardEvent>(1000),//Espera 500 milesimas de segundo para hacer la emision
  // pluck<KeyboardEvent, string>('target','value'),//extrae el ´value´ del ´target´
  map<KeyboardEvent, string>((event) => event.target['value']),
  map<string, Observable<GithubUsersResponse>>((text) => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),//retorna una peticion ajax
  mergeAll<Observable<GithubUsersResponse>>(),//une las emisiones de todos los observables suscritos
  map<GithubUsersResponse, GithubUser[]>((res)=>res.items),
  // catchError((err: AjaxError)=>{
  //   console.error('Error capturado: ', err)
  //   return of([])
  // })
  // pluck('items')
).subscribe(showUsers);