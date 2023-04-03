// Ejercicio_9

class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("El animal emite un sonido.");
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log("El perro ladra: ¡Guau!");
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log("El gato maulla: ¡Miau!");
    }
  }
  
  const miPerro = new Perro("Fido", 3);
  const miGato = new Gato("Garfield", 5);
  
  miPerro.emitirSonido(); 
  miGato.emitirSonido(); 
  