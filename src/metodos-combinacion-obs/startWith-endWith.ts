import { endWith, of, startWith } from 'rxjs';
import { observer } from '../utils/util';

//El of es sincrono
const numbers$ = of(1,2,3,4)
  .pipe(
    //el observable inicia la emision con ese valor
    startWith(0)
  );

numbers$.subscribe(observer);

const letters$ = of(10,20,30)
  .pipe(
    startWith('a','b','c',),
    //el observable termina la emision con ese valor
    endWith('x','y','z',)
  );

letters$.subscribe(observer);
