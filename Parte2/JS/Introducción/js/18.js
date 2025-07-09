// Arrow Functions

const sumar = (num1, num2) => console.log(num1 + num2);

sumar(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

// forEach
meses.forEach((mes) => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

let resultado = meses.includes("Diciembre");
// Some ideal para arreglo de objetos

resultado = carrito.some((producto) => producto.nombre === "Celular");

console.log(resultado);

resultado = carrito.reduce((total, producto) => {
  total + producto.precio;
}, 0);

// Filter
result = carrito.filter((producto) => producto.precio > 400);

console.log(result);
