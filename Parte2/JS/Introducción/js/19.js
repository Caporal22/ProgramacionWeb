// Estructura de control
// const efectivo = 1000;
// const carrito = 880;
// if (efectivo > carrito) {
//   console.log(`Si se puede dar ese gusto`);
// } else {
//   console.log(`No se puede dar ese gusto`);
// }

const rol = "EDITOR";

if (rol === "ADMINISTRADOR") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("No tienes acceso a la mayoria de secciones");
} else {
  console.log("No tiene acceso al sistema");
}
