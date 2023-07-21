var landing = document.querySelector('.landing');
var instagram = document.querySelector('.instagram');
var whatsapp = document.querySelector('.whatsapp');
var youtube = document.querySelector('.youtube');

landing.addEventListener('click', function() {
    window.location.href = '../landing.html';
});
whatsapp.addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=573107437992&text=🏡%20Buenvenid%40s%20a%20Posada%20Capesina.Déjanos%20tu%20mensaje%20y%20en%20un%20momento%20nos%20comunicaremos%20contigo.%20Muchas%20gracias%20🤗¡Mi%20posada%20es%20tu%20posada!';
});
instagram.addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/posadacampesinalagloria/';
});

youtube.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/@posadacampesinalagloria30';
});

// Función para observar la intersección de los elementos con el viewport
function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Agregar el Intersection Observer a los labels cuando se carga la página
  document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('.switch label');
    var observerOptions = {
      root: null,
      threshold: 0.2 // Porcentaje de intersección requerido para activar la animación
    };
  
    var observer = new IntersectionObserver(handleIntersection, observerOptions);
    labels.forEach(function (label) {
      observer.observe(label);
    });
  });
  