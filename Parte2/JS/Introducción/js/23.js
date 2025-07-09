// this  palabra reservada

const reservacion = {
  nombre: "Danielini",
  apellido: "Caporal",
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`
    );
  },
};

console.log(reservacion.informacion());
