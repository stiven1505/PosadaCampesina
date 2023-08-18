
(() => {
  'use strict'

  var switcher = document.getElementById('switcher');
  var switcher2 = document.getElementById('switcher2');
  var switcher3 = document.getElementById('switcher3');
  var switcher4 = document.getElementById('switcher4');

  var landingIcon = document.querySelector('.landing-icon');
  var instagramIcon = document.querySelector('.instagram-icon');
  var whatsappIcon = document.querySelector('.whatsapp-icon');
  var youtubeIcon = document.querySelector('.youtube-icon');

  let anchoPantalla;
  let posicionBtn;

  let viewPc = 1440;
  let viewTablet = 1280;
  let viewMovil = 430;

  const forms = document.querySelectorAll('.needs-validation');
  const formReservas = document.getElementById('formReservas');
  const aReservas = document.getElementById('a-reservas');

  const fechaLlegada = document.getElementById('fechaLlegada');
  const fechaSalida = document.getElementById('fechaSalida');
  const telefono = document.getElementById('telefono');
  const nombre = document.getElementById('nombre');

  switcher.addEventListener('click', function () {
    setTimeout(() => {
      window.location.href = '../landing.html';
      switcher.checked = true;
    }, 1000);
  });
  
  switcher2.addEventListener('click', function () {
    setTimeout(() => {
      window.location.href = 'https://www.instagram.com/posadacampesinalagloria/';
      switcher2.checked = true;
    }, 1000);
  });
  
  switcher3.addEventListener('click', function () {
    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/@posadacampesinalagloria30';
      switcher3.checked = true;
    }, 1000);
  });
  
  switcher4.addEventListener('click', function () {
    setTimeout(() => {
      window.location.href = 'https://api.whatsapp.com/send?phone=573107437992&text=🏡%20Buenvenid%40s%20a%20Posada%20Capesina.Déjanos%20tu%20mensaje%20y%20en%20un%20momento%20nos%20comunicaremos%20contigo.%20Muchas%20gracias%20🤗¡Mi%20posada%20es%20tu%20posada!';
      switcher4.checked = true;
    }, 1000);
  });
  
  
  
  window.addEventListener('load', mostrarAnchoPantalla);
  window.addEventListener('resize', mostrarAnchoPantalla);
  
  window.addEventListener('scroll', function () {
    posicionBtn = switcher.getBoundingClientRect().top;
    console.log(posicionBtn);
    if (anchoPantalla >= viewPc) {
      if (posicionBtn < 900) return addClass();
      removeClass();
    }
    if (anchoPantalla <= viewTablet && anchoPantalla > viewMovil) {
      if (posicionBtn < 500) return addClass();
      removeClass();
    }
    if (anchoPantalla <= viewMovil) {
      if (posicionBtn < 450) return addClass();
      removeClass();
    }
  });
  
  function mostrarAnchoPantalla() {
    anchoPantalla = window.innerWidth;
  }
  
  function addClass() {
    landingIcon.classList.add("animate__shakeX");
    instagramIcon.classList.add("animate__shakeX");
    whatsappIcon.classList.add("animate__shakeX");
    youtubeIcon.classList.add("animate__shakeX");
  }
  function removeClass() {
    landingIcon.classList.remove("animate__shakeX");
    instagramIcon.classList.remove("animate__shakeX");
    whatsappIcon.classList.remove("animate__shakeX");
    youtubeIcon.classList.remove("animate__shakeX");
  }
  

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })


  formReservas.addEventListener('submit', (e) => {
    if (formReservas.checkValidity()) {
      e.preventDefault();

      let body = `
              Hola,

              Me gustaría reservar una habitación en la Posada Campesina para las fechas ${fechaLlegada.value} al ${fechaSalida.value}. Por favor, contáctenme a través de este número ${telefono.value} para confirmar la disponibilidad. ¡Gracias!

              Atentamente,
              ${nombre.value}
          `;

      console.log(body);
      aReservas.setAttribute('href', `mailto:posadacampesinalagloria@gmail.com?subject=Reserva Posada Campesina&body=${encodeURIComponent(body)}`);
      aReservas.click();

      btnSubmitReservas.setAttribute('data-bs-dismiss', 'modal');
      btnSubmitReservas.click();

      formReservas.reset();
      formReservas.classList.remove('was-validated');
      location.reload()
    }
  });

})()