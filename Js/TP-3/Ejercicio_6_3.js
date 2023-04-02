// Ejercicio_6

/*  Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b) */
// Solicitar al usuario el valor de los lados del rectángulo

let ladoA = parseInt(prompt("Ingrese el valor del lado A:"));
let ladoB = parseInt(prompt("Ingrese el valor del lado B:"));

function calcularPerimetro(a, b) {
  let perimetro = 2 * (a + b);
  return perimetro;
}
let perimetroRectangulo = calcularPerimetro(ladoA, ladoB);

document.write("El perímetro del rectángulo es: " + perimetroRectangulo);
