// Métodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist: ${nombre}`);
  },
};

reproductor.borrarCanción = function (id) {
  console.log(`Eliminando la canción ${id}`);
};
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCanción(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
