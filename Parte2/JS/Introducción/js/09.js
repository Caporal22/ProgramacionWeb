"use strict"; // Correr JS en modo estricto. 

// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // No permite agregar, eliminar, modificar 

Object.seal(producto); // .frezee .seal   comportamiento const
producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

console.log(producto);
