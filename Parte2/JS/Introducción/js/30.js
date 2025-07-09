// function obtenerEmpleados() {
//   const archivo = "empleados.json";
//   //   const contenedor = document.querySelector('#empleados');
//   fetch(archivo)
//     .then((respuesta) => {
//       return respuesta.json();
//     })
//     .then((datos) => {
//       //console.log(datos.empleados);
//       const { empleados } = datos;
//       empleados.forEach((empleado) => {
//         // console.log(empleado);
//         console.log(empleado.id);
//         console.log(empleado.nombre);
//         console.log(empleado.puesto);
//         document.querySelector(".contenido").textContent += empleado.nombre;
//       });
//     });
// }

async function obtenerEmpleados() {
  const archivo = "empleados.json";
  const respuesta = await fetch(archivo);
  const datos = await respuesta.json();
  const { empleados } = datos;
  console.log(empleados);
}

obtenerEmpleados();
