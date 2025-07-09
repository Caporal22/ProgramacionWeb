// Funciones

function sumar() {
  console.log(10 + 10);
}

sumar();

// Expresión de la función

const sumar2 = function () {
  console.log(3 + 3);
};

sumar2()(
  // IIFE  sirve para proteger las variables
  function () {
    console.log("Esto es una función");
  }
)();
// etapa de creación y la segunda la ejecución (no importa si la llamaste antes y la declaraste despues)
