//POO

// Object literal
const producto = {
  nombre: "tablet",
  precio: 500,
};

//Objecto constructor
function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

//Prototype
// Crear funciones que solo se utilizan en un objeto en específico
Cliente.prototype.formatearCliente = function () {
  return `El cliente ${this.nombre} y su apellido: ${this.apellido}`;
};

// Object constructor
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

//Prototype
// Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
};

const producto2 = new Producto('Monitor curvo de 49"', 800, false);
const producto3 = new Producto("Television", 500, true);
const cliente = new Cliente("Danielini", "Caporal");

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());
