import { Observer } from "rxjs";

export const observer: Observer<any> = {
  next: (valor) => console.log('Next ', valor),
  error: (error) => console.log(error),
  complete: () => console.info('Ok')
}