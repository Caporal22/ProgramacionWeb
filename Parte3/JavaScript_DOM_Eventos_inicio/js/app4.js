// Eventos de los inputs y textareas

// const nombre = document.addEventListener("DOMContentLoaded", function () {
//   const inputs = document.querySelectorAll("#nombre");

//   inputs.forEach((input) => {
//     input.addEventListener("focus", function () {
//       this.style.backgroundColor = "#e0f7fa"; // Cambia el color de fondo al enfocar
//     });

//     input.addEventListener("blur", function () {
//       this.style.backgroundColor = ""; // Restaura el color de fondo al perder el foco
//     });

//     input.addEventListener("input", function () {
//       console.log(`Valor actual: ${this.value}`); // Muestra el valor actual en la consola
//     });
//   });
// });

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

// const nombre = document.querySelector("#nombre");
// nombre.addEventListener("input", function (event) {
//   console.log(`El nombre es: ${this.value}`);
//   console.log(`El nombre es: ${event}`);
//   console.log(event);
//   // this.style.backgroundColor = "#e0f7fa"; // Cambia el color de fondo al cambiar
// });

// function leerTexto() {
//   const texto = document.querySelector("#mensaje");
//   texto.addEventListener("input", function (event) {
//     console.log(`El texto es: ${event.value}`);
//     //console.log(`El texto es: ${event}`);
//     datos[event.target.id] = event.value; // Actualiza el objeto datos con el valor del input
//     console.log(`Datos actualizados:`, datos);
//     datos[event.target.nombre] = this.nombre;

//     console.log(event);
//     console.log(datos);
//     // this.style.backgroundColor = "#e0f7fa"; // Cambia el color de fondo al cambiar
//   });
// }

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Función para leer el texto de los inputs y actualizar el objeto de datos
function leerTexto(event) {
  datos[event.target.id] = event.target.value; // Actualiza el objeto datos con el valor del input
  // datos[event.target.email] = event.target.value;
  // datos[event.target.mensaje] = event.target.value;

  console.log("Datos actualizados:", datos);
}
