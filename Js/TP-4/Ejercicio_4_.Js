// Ejercicio 4

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      document.write(`Código: ${this.codigo} - Nombre: ${this.nombre} - Precio: ${this.precio}<br>`);
    }
  }
  
  const producto1 = new Producto(1, "Producto 1", 10);
  const producto2 = new Producto(2, "Producto 2", 20);
  const producto3 = new Producto(3, "Producto 3", 30);
  
  const productos = [producto1, producto2, producto3];
  
  productos.forEach(producto => producto.imprimeDatos());
  