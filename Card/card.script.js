
//Inserta las imagenes
for (let i = 0; i < 50; i++) {
  var x = Math.floor(Math.random() * (700 - 200 + 1) + 100);

  var html = '<div class="grid-item"><img src="https://picsum.photos/300/'+x+'.jpg" width="236" height="'+x+'"/><div class="overlay"><button class="descargar">Guardar</button> <button class="compartir"><img src="img/subir-archivo.png"></button><button class="mas"><img src="img/mas.png"></button></div></div>';

  document.getElementById('contenedorimg').insertAdjacentHTML('afterend', html);

}

var elem = document.querySelector(".grid-container");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 236,
  gutter: 20,
  isFitWidth: true
});

// Verifica si se alcanzó el fondo de la página y agrega más imagenes
window.addEventListener('scroll', function () {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    for (let i = 0; i < 50; i++) {
      var x = Math.floor(Math.random() * (700 - 200 + 1) + 100);

      var html = '<div class="grid-item"><img src="https://picsum.photos/300/'+x+'.jpg" width="236" height="'+x+'"/><div class="overlay"><button class="descargar">Guardar</button> <button class="compartir"><img src="img/subir-archivo.png"></button><button class="mas"><img src="img/mas.png"></button></div></div>';


      contenedorimg.insertAdjacentHTML('beforeend', html);
      var elem = document.querySelector(".grid-container");
      var msnry = new Masonry(elem, {
        itemSelector: ".grid-item",
        columnWidth: 236,
        gutter: 20,
        isFitWidth: true
      });
    }
  }
});




