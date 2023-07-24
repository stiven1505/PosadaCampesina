
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
