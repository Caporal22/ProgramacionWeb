//Seleccionar elementos y asignarles un ID
document.addEventListener("DOMContentLoaded", function () {
  // DOMContentLoaded espera a que el HTML este listo
  // This is the DOMContentLoaded event
  console.log(6);
  document
    .querySelector(".boton--primario")
    .addEventListener("click", function () {
      console.log(3);
    });
});
// Boton de enviar para el formulario
// let btnEnviar = document.querySelector(".boton--primario");
// btnEnviar = addEventListener("click", function (event) {
//   console.log(event);
//   event.preventDefault(); // Evita que el formulario se envíe

//   //Validación de campos

//   console.log("Botón primario clickeado");
// });

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
//Evento submit del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe
  console.log("Formulario enviado");
  console.log(event);

  //Validar el formulario
  const { nombre, email, mensaje } = datos; // Desestructuración del objeto datos
  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos los campos son obligatorios");
    // alert("Todos los campos son obligatorios");
    console.log("Todos los campos son obligatorios");
    return; // Sale de la función si hay campos vacíos
  }
  //Enviar el formulario
  mostrarEnvio("Formulario enviado correctamente");
  console.log("Enviando formulario con los siguientes datos:");
  console.log(`Nombre: ${nombre} -- Email: ${email} -- Mensaje: ${mensaje}`);
});

// Función para leer el texto de los inputs y actualizar el objeto de datos
function leerTexto(event) {
  datos[event.target.id] = event.target.value; // Actualiza el objeto datos con el valor del input
  // datos[event.target.email] = event.target.value;
  // datos[event.target.mensaje] = event.target.value;

  console.log("Datos actualizados:", datos);
}

mostrarError = (mensaje) => {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;
  alerta.classList.add("error");
  formulario.appendChild(alerta);

  // Eliminar la alerta después de 3 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
};

mostrarEnvio = (mensaje) => {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");
  formulario.appendChild(alerta);

  // Eliminar la alerta después de 3 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
};
