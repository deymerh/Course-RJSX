import { asyncScheduler } from "rxjs";

const saludar = () => console.log('Saludar');
const saludarPersonalizado = (nombre) => console.log(`Hola ${nombre}`);
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludarPersonalizado, 2000, 'Deymer');

const asyncScheduler$ = asyncScheduler.schedule(function (estado) {
  console.log(estado);
  this.schedule(estado += 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(() => asyncScheduler$.unsubscribe(), 6000);