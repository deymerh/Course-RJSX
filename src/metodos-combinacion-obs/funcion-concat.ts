import { concat, interval, take, of } from 'rxjs';

const interval$ = interval(1000);

// Concatena varios observables en secuencia
concat(
  interval$.pipe(take(2)),
  interval$.pipe(take(3)),
  of(10, 20)
).subscribe(console.log);