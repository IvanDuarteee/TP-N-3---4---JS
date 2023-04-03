class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    modificarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
      alert("Ancho modificado correctamente.");
    }
  
    modificarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
      alert("Alto modificado correctamente.");
    }
  
    mostrarPropiedades() {
      alert(`Ancho: ${this.ancho}, Alto: ${this.alto}`);
    }
  
    calcularPerimetro() {
      const perimetro = 2 * (this.ancho + this.alto);
      alert(`El perímetro del rectángulo es ${perimetro}`);
    }
  
    calcularArea() {
      const area = this.ancho * this.alto;
      alert(`El área del rectángulo es ${area}`);
    }
  }
  
  const ancho = prompt("Ingrese el ancho del rectángulo:");
  const alto = prompt("Ingrese el alto del rectángulo:");
  
  const rectangulo = new Rectangulo(Number(ancho), Number(alto));
  
  rectangulo.mostrarPropiedades();
  rectangulo.calcularPerimetro();
  rectangulo.calcularArea();
  
  const nuevoAncho = prompt("Ingrese el nuevo ancho del rectángulo:");
  rectangulo.modificarAncho(Number(nuevoAncho));
  
  const nuevoAlto = prompt("Ingrese el nuevo alto del rectángulo:");
  rectangulo.modificarAlto(Number(nuevoAlto));
  
  rectangulo.mostrarPropiedades();
  rectangulo.calcularPerimetro();
  rectangulo.calcularArea();
  