/*A medida que baja la resolucion de pantalla tambien baja la escala del logo */

window.addEventListener('resize', () => {
    const animation = document.querySelector('#fiske420');
    const gape = document.querySelector('#inicio');

    animation.style.transform = window.innerWidth < 768 && window.innerWidth>400? `scale(${window.innerWidth / 768})`: '1';
    gape.style.gap = 
    window.innerWidth < 1200? `${window.innerWidth / 100}px` : '10px';
});

/*Ahora voy a escribir el codigo para cambiar la imagen de #logo de donde esta y lo voy a insertar en el div con la clase "titulo" dentro del document */
window.addEventListener('DOMContentLoaded', ()=>{
    if(window.innerWidth < 680){

        const titulo = document.querySelector('.titulo');
        titulo.innerHTML = "";
        titulo.innerHTML = "<div id='divLogo'></div>";
    }
})
