//Ejercicio 1

/*Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apaga */


let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Rojo',
    encendido: false,
    
    encender: function() {
      this.encendido = true;
      document.write('Auto encendido<br>');
    },
    
    apagar: function() {
      this.encendido = false;
      document.write('El auto se apagó<br>');
    }
  };
  
  auto.encender();
  auto.apagar();