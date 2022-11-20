import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.log(error),
  complete: () => console.info('Ok')
}
const observable$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.complete();
});

observable$.subscribe(observer);
