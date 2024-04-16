/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

function calcularEdad(fechaNacimiento) {
  let fechaNac = new Date(fechaNacimiento);
  let fechaActual = new Date();
  
  let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
  if (fechaNac.getMonth() > fechaActual.getMonth() || 
      (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
      edad--;
  }
  
  return edad;
}

let jugador = {
  name: 'Luciano',
  lastName: 'Rodriguez',
  nickname: 'Lucho',
  birthDate: '2003-07-16' 
};

let edadJugador = calcularEdad(jugador.birthDate);

console.log(`${jugador.name} "${jugador.nickname}" ${jugador.lastName} (${edadJugador} años)`);
