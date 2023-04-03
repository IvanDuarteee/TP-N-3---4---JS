// Ejercicio_8

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  
    despedirse() {
      console.log(`Hasta luego!`);
    }
  }
  
  const persona1 = new Persona("Juan", 30, "Ingeniero");
  const persona2 = new Persona("Ana", 25, "Abogada");
  
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  