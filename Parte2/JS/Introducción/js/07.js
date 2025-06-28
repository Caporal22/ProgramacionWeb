// Objetos


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponibilidad: true
}

console.log(producto);

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponibilidad);
// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen  = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponibilidad;
console.log(producto);

// Destructuring