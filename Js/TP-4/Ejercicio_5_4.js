// Ejercicio 5

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion;
      if (this.añoNacimiento >= 1901 && this.añoNacimiento <= 1927) {
        generacion = "Generación de los mayores";
        console.log(`${generacion}: Característico de esta generación es el trabajo duro.`);
      } else if (this.añoNacimiento >= 1928 && this.añoNacimiento <= 1945) {
        generacion = "Generación silenciosa";
        console.log(`${generacion}: Característico de esta generación es la austeridad.`);
      } else if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
        generacion = "Baby Boomers";
        console.log(`${generacion}: Característico de esta generación es la ambición.`);
      } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
        generacion = "Generación X";
        console.log(`${generacion}: Característico de esta generación es la independencia.`);
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
        generacion = "Generación Y o Millennials";
        console.log(`${generacion}: Característico de esta generación es la tecnología.`);
      } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
        generacion = "Generación Z";
        console.log(`${generacion}: Característico de esta generación es la globalización.`);
      } else {
        console.log("Año de nacimiento no válido");
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} no es mayor de edad.`);
      }
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`DNI: ${this.dni}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso}`);
      console.log(`Altura: ${this.altura}`);
      console.log(`Año de nacimiento: ${this.añoNacimiento}`);
    }
  
    generaDNI() {
      this.dni = Math.floor(Math.random() * 100000000);
    }
  }
  
  let nombre = prompt("Ingrese su nombre:");
  let edad = parseInt(prompt("Ingrese su edad:"));
  let dni = prompt("Ingrese su DNI:");
  let sexo = prompt("Ingrese su sexo (H hombre, M mujer):");
  let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
  let altura = parseFloat(prompt("Ingrese su altura en metros:"));
  let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
  
  let persona = new Persona(nombre, edad, dni, sexo, peso, altura, añoNacimiento);
  persona.mostrarGeneracion();
  persona
  