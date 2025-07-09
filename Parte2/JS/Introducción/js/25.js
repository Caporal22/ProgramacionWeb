// Clases

class Producto {
  constructor(nombre, precio, disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
  }
  getPrecio() {
    return `El precio es de ${this.precio}`;
  }
}

const producto = new Producto();

const producto2 = new Producto('Monitor curvo de 49"', 800, false);
const producto3 = new Producto("Television", 500, true);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto3.getPrecio());

// Herencia

class Libro extends Producto {
  constructor(nombre, precio, disponibilidad, isbm) {
    super(nombre, precio, disponibilidad);
    this.isbm = isbm;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su isbm es: ${this.isbm}`;
  }

  getPrecio() {
    return super.getPrecio();
  }
}

const libro = new Libro("Sin limites", 700, true, 10101);
console.log(libro);

console.log(libro.formatearProducto());
console.log(libro.getPrecio());
