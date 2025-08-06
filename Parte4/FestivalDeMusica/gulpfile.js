import path from 'path'
import fs from 'fs'
import {glob} from 'glob'
import { src, dest, watch, series } from "gulp";
// Importar el paquete de SASS
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass); // Compilar SASS a CSS

import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import sharp from 'sharp';


export function js(done) {
  src("src/js/app.js") // Ruta del archivo JavaScript
    .pipe(terser())
    .pipe(dest("build/js")) // Ruta de destino del JavaScript compilado
  console.log("Compilando JavaScript...");
  done();
}

export function css(done) {
  console.log("Compilando css...");
  src("src/scss/app.scss", { sourcemaps: true }) // Ruta del archivo SASS
    .pipe(sass().on("error", sass.logError)) // Compilar SASS a CSS
    .pipe(cleanCSS({ level: 2 })) // Minificar el CSS correctamente
    .pipe(dest("build/css", { sourcemaps: false })); // Ruta de destino del CSS compilado
  done();
}

export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

// Se encarga de buscar imagenes y manda llamar a procesar
export async function imagenes(done) {
    const srcDir = './src/img';
    const buildDir = './build/img';
    const images =  await glob('./src/img/**/*{jpg,png}')

    images.forEach(file => {
        const relativePath = path.relative(srcDir, path.dirname(file));
        const outputSubDir = path.join(buildDir, relativePath);
        procesarImagenes(file, outputSubDir);
    });
    done();
}

// Procesa la imagenes 
function procesarImagenes(file, outputSubDir) {
    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true })
    }
    const baseName = path.basename(file, path.extname(file))
    const extName = path.extname(file)
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`)
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`)
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`)

    const options = { quality: 80 } // Bajar un poco el tamaño
    sharp(file).jpeg(options).toFile(outputFile)
    sharp(file).webp(options).toFile(outputFileWebp)
    sharp(file).avif().toFile(outputFileAvif)
}

export function watchFiles() {
  // Observa los cambios en los archivos SASS y ejecuta la tarea css
  src("src/scss/**/*.scss").on("change", css);
}

export function dev() {
  // Inicia el observador de archivos
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js); 
  watch("src/img/**/*.{png, jpg}", imagenes); 
  // watch(js);
}

export default series(crop, js, css, imagenes, dev); // Exporta las tareas para ser ejecutadas en serie
