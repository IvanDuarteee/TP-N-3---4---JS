// Ejercicio 5

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion;
      if (this.anioNacimiento >= 1901 && this.anioNacimiento <= 1927) {
        generacion = "Generación de los mayores";
        console.log(`${generacion}: Característico de esta generación es el trabajo duro.`);
      } else if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
        generacion = "Generación silenciosa";
        console.log(`${generacion}: Característico de esta generación es la austeridad.`);
      } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
        generacion = "Baby Boomers";
        console.log(`${generacion}: Característico de esta generación es la ambición.`);
      } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        console.log(`${generacion}: Característico de esta generación es la independencia.`);
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generación Y o Millennials";
        console.log(`${generacion}: Característico de esta generación es la tecnología.`);
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
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
      console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    }
  
    generaDNI() {
      this.dni = Math.floor(Math.random() * 100000000);
    }
  }