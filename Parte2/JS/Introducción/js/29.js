// Async await
function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere... ");
    setInterval(function () {
      resolve("Clientes descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos... espere... ");
    setInterval(function () {
      resolve("Pedidos descargados");
    }, 3000);
  });
}

async function app() {
  // Función asíncrona
  //   console.log("Iniciando aplicación desde app()");
  //   const cliente = await descargarNuevosClientes();
  //   const pedidos = await descargarUltimosPedidos()
  //     .then(function () {
  //       console.log(cliente);
  //       console.log(pedidos);
  //       console.log("Descarga completa");
  //     })
  //     .catch(function (error) {
  //       console.log("Error al descargar clientes: ", error);
  //     });

  try {
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]); // Clientes descargados
    console.log(resultado[1]); // Pedidos descargados
  } catch (error) {
    console.log("Error en la aplicación: ", error);
  }
}

app();

console.log("Esto se ejecuta después de app()");
