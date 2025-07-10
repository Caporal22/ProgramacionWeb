// -- querySelector
// retorna ningún elemento o un elemnto del DOM

const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elementos
// console.log(heading); // <h2>Hola mundo</h2>
heading.textContent = "Hola mundo desde JavaScript"; // Cambia el texto del h2
heading.classList.add("nuevo-clase"); // Agrega una nueva clase al h2
// heading.classList.remove("nuevo-clase"); // Elimina la clase del h2
// heading.classList.toggle("nuevo-clase"); // Agrega o elimina la clase del h2
// heading.classList.contains("nuevo-clase"); // Verifica si la clase existe en el h2
// heading.classList.replace("nuevo-clase", "otra-clase"); // Reemplaza la clase del h2
// heading.style.backgroundColor = "red"; // Cambia el color de fondo del h2
// heading.style.color = "white"; // Cambia el color del texto del h2

console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); // Retorna un NodeList con todos los enlaces
console.log(enlaces); // NodeList(4) [a, a, a, a]
//enlaces[0].textContent = "Nuevo enlace"; // Cambia el texto del primer enlace

//enlaces[0].href = "https://www.google.com"; // Cambia el enlace del primer enlace
//enlaces[0].classList.add("nueva-clase"); // Agrega una nueva clase al primer enlace

// -- getElementById
const heading2 = document.getElementById("heading"); // Retorna un elemento del DOM por su id
console.log(heading2); // <h2 id="heading" class="no-margin">Blog de café con consejos y cursos</h2>

// console.log("funciona correctamente");
// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A"); // Crea un nuevo elemento <a>
console.log(nuevoEnlace); // <a></a>
// Agregar el href al nuevo enlace
nuevoEnlace.href = "https://www.google.com"; // Agrega el href al nuevo enlace
// Agregar el texto al nuevo enlace
nuevoEnlace.textContent = "Nuevo enlace"; // Agrega el texto al nuevo enlace
// Agregar la clase al nuevo enlace
nuevoEnlace.classList.add("navegacion__enlace"); // Agrega la clase al nuevo enlace
//Agregar el nuevo enlace al documento
const navegacion = document.querySelector(".navegacion"); // Selecciona el elemento
navegacion.appendChild(nuevoEnlace); // Agrega el nuevo enlace al final del elemento
