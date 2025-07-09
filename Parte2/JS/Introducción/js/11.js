// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// console.table(meses);

const arreglo = [
  "Hola",
  10,
  true,
  "si",
  null,
  { nombre: "juan", trabajo: "Programador" },
  [1, 2, 3],
];

console.log(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero){
//     console.log(numero);
// })

numeros.push(60, 70, 80); // Agrega al final del arreglo
numeros.unshift(-10, -20); // Agrega al inicio del arreglo

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
meses.pop(); // Eliminar el último elemento del arreglo}
meses.splice(2, 1); // Eliminar el valor de marzo
console.table(meses);

// Rest operator o Spread Operator

const nuevoArreglo = [...meses, "Junio"];
console.log(nuevoArreglo);
