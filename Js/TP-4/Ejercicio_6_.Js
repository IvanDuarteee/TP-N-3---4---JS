//Ejercicio_6

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // getters y setters
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(newISBN) {
      this._ISBN = newISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(newTitulo) {
      this._titulo = newTitulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(newAutor) {
      this._autor = newAutor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(newNumPaginas) {
      this._numPaginas = newNumPaginas;
    }
  
    mostrarLibro() {
      return `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene páginas ${this._numPaginas}.`;
    }
  }
  
  const libro1 = new Libro("123456789", "Cien años de soledad", "Gabriel García Márquez", 432);
  const libro2 = new Libro("987654321", "El principito", "Antoine de Saint-Exupéry", 96);
  document.write(libro1.mostrarLibro() + "<br>");
  document.write(libro2.mostrarLibro() + "<br>");
  
  if (libro1.numPaginas > libro2.numPaginas) {
    document.write("El libro 1 tiene más páginas.");
  } else if (libro2.numPaginas > libro1.numPaginas) {
    document.write("El libro 2 tiene más páginas.");
  } else {
    document.write("Ambos libros tienen la misma cantidad de páginas.");
  }