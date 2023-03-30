//Ejercicio_2_TP3

/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

let ciudades = [];
let ciudad;

do {
  ciudad = prompt("Ingrese el nombre de una ciudad:");

  if (ciudad !== null) {
    ciudades.push(ciudad);
  }
} while (ciudad !== null);

// Mostrar arreglo
document.write("<h2>Arreglo de ciudades:</h2>");
document.write("<ul>");

for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}

document.write("</ul>");

// Mostrar longitud
document.write(`<p>La longitud del arreglo es: ${ciudades.length}</p>`);

// Mostrar primera, tercera y última posición
document.write(`<p>La primera ciudad es: ${ciudades[0]}</p>`);
document.write(`<p>La tercera ciudad es: ${ciudades[2]}</p>`);
document.write(`<p>La última ciudad es: ${ciudades[ciudades.length - 1]}</p>`);

// Añadir ciudad de París
ciudades.push("París");

// Mostrar segundo elemento
document.write(`<p>El segundo elemento es: ${ciudades[1]}</p>`);

// Reemplazar segundo elemento por 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar arreglo actualizado
document.write("<h2>Arreglo de ciudades actualizado:</h2>");
document.write("<ul>");

for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}

document.write("</ul>");
