// Ejercicio_4

/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

let numero = parseInt(prompt("Ingrese un numero: "));

const resultado = parOimpar(numero);


function parOimpar (numero) {
    if  (numero % 2 === 0)  {
        return "Par" ;
    }
    else {
        return "Impar";
    }
}

alert (resultado);