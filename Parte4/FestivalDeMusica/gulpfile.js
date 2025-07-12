import { src, dest } from "gulp";
// Importar el paquete de SASS
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass); // Compilar SASS a CSS

export function css(done) {
  src("src/scss/app.scss") // Ruta del archivo SASS
    .pipe(sass()) // Compilar SASS a CSS
    .pipe(dest("build/css")); // Ruta de destino del CSS compilado

  done();
  done();
}
