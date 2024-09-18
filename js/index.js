/*A medida que baja la resolucion de pantalla tambien baja la escala del logo */

window.addEventListener('resize', () => {
    const animation = document.querySelector('#fiske420');
    const gape = document.querySelector('#inicio');

    animation.style.transform = window.innerWidth < 768 && window.innerWidth>400? `scale(${window.innerWidth / 768})`: '1';
    gape.style.gap = 
    window.innerWidth < 1200? `${window.innerWidth / 100}px` : '10px';
});

/*Ahora voy a escribir el codigo para cambiar la imagen de #logo de donde esta y lo voy a insertar en el div con la clase "titulo" dentro del document */

    if(window.innerWidth < 680){

        const titulo = document.querySelector('.titulo');
        titulo.innerHTML = "";
        titulo.innerHTML = "<div id='divLogo'></div>";
    }


 // Código para el SPA - Navegación
 /*recorro toda la lista de elementos que poseen la clase nav-link y le aplico el evento click*/
 document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      /*guardo en targetId el href sin el # , este va a coincidir con el id de la etiqueta */
      const targetId = this.getAttribute('href').substring(1);
      console.log(targetId);
      
      /*recorro toda la lista de elementos con la clase section y los oculto */
      document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    
        /*SI el id es semillas entonces muestro semillas pero no su contenido */
      if(targetId === "semillas"){
        document.querySelectorAll('.subcategory').forEach(section => {
            section.style.display = 'none';

          document.getElementById("semillas").style.display = 'block';

            })

      }else{
        document.getElementById(targetId).style.display = 'block';
      }
      


    });
  })});

  /*recorro toda la lista de elementos con la clase nav-link1 y le aplico a cada uno el evento click */
  document.querySelectorAll('.nav-link1').forEach(submenu => {
    submenu.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      console.log(targetId);
      
      /*oculto todas los elementos con la clase subcategory */
      document.querySelectorAll('.subcategory').forEach(section => {
        section.style.display = 'none';})
      
        /*como el id le gana a la clase, muestro el elemento que tiene un id que coincide con el href */
      document.getElementById(targetId).style.display ='block'
    
    
    
    })}) 
  
      
  // Mostrar solo la sección de inicio al cargar la página
  document.getElementById('home').style.display = 'block';

