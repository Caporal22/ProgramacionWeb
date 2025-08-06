document.addEventListener('DOMContentLoaded', () => {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});


function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    // Revisar cuando se pasa un elemento (scroll) Ya no este visible en el navegador
    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){ 
            header.classList.add('fixed');
        }else {
             header.classList.remove('fixed');
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const CANTIDAD_IMAGENES = 16;
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) { 
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
        <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
    `;

        // imagen.loading = 'lazy'; // Performance web
        // imagen.width = "300";
        // imagen.height = "200";
        // imagen.src = `src/img/gallery/thumb/${i}.jpg`;
        // imagen.alt = 'Imagen Galería';

        // Event Handler para abrir la imagen en un modal
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
        
    }
}

function mostrarImagen(i){

    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
    <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
`;
    
    // imagen.src = `src/img/gallery/full/${i}.jpg`;
    // imagen.alt = 'Imagen Galería';

    // Crear el modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal();

    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal();

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    // Agregar la imagen al modal HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

}

function cerrarModal(){
   const modal = document.querySelector('.modal'); 
   modal.classList.add('fade-out');
   setTimeout(() => {
    modal?.remove();
    // Elimina la clase al salir del modal (clase de body)
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');

   }, 500);
   
}

function resaltarEnlace(){
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight; // Obtener cuanto miden nuestros elementos
            
            // Comprueba el scroll de las secciones
            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual ){
                link.classList.add('active');
            }
        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior : 'smooth'}); // Control de navegación de forma sutil (tipo animación)
             
        } )
    })
}