// Ejercicio_7

/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */ 

function tablaDeMultiplicar(numero){
    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
    document.write(`<ul>`);
    for(let i=1; i<=10; i++)
    {
        document.write(`<li>${numero} * ${i} = ${numero*i}</li>`);
    }
    document.write(`</ul>`);
    }
    let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicion: "));
    tablaDeMultiplicar(numero);