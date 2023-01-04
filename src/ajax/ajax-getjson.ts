import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123'
}).subscribe(console.log);
