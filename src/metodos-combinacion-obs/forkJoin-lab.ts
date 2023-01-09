import { forkJoin, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const API_GITHUB = 'https://api.github.com/users';
const USER_GITHUB = 'deymerh';

forkJoin({
  usuario: ajax.getJSON(`${API_GITHUB}/${USER_GITHUB}`),
  repos: ajax.getJSON(`${API_GITHUB}/${USER_GITHUB}/repos`),
  gists: ajax.getJSON(`${API_GITHUB}/${USER_GITHUB}/gistsxxx`)
    .pipe(catchError((err: AjaxError) => {
      console.log(err.message);
      return of([])
    })),
}).subscribe(console.log)