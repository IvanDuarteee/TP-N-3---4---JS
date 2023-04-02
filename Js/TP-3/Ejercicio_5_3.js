// Ejercicio_5

/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */ 

function texto (cadena)
{
        if(cadena === cadena.toUpperCase())
        {
          alert("LA CADENA SOLO TIENE MAYUSCULAS");
        }
        else if(cadena  === cadena.toLowerCase())
        {
            alert("la cadena solo tiene minusculas");
        }
        else{
            alert("LA CADENA TIENE MAYUSCULAS y minusculas");
        }
    
}
const cadena = prompt("Ingrese un texto");
texto(cadena);