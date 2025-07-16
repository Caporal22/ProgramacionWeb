import { src, dest, watch } from "gulp";
// Importar el paquete de SASS
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass); // Compilar SASS a CSS

export function css(done) {
  src("src/scss/app.scss") // Ruta del archivo SASS
    .pipe(sass().on("error", sass.logError)) // Compilar SASS a CSS
    .pipe(dest("build/css")); // Ruta de destino del CSS compilado

  done();
  done();
}

export function watchFiles() {
  // Observa los cambios en los archivos SASS y ejecuta la tarea css
  src("src/scss/**/*.scss").on("change", css);
}

export function dev() {
  // Inicia el observador de archivos
  watch("src/scss/**/*.scss", css);
  // watch(js);
}
