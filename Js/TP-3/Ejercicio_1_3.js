//Ejercicio_1_TP3

// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

let meses = ["Enero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]

document.write('<ul>');
for(let i = 0; i < meses.length; i++) {
  document.write(`<li>${meses[i]}</li>`);
}
document.write('</ul>');