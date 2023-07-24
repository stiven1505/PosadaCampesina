
    var switcher = document.getElementById('switcher');
    var switcher2 = document.getElementById('switcher2');
    var switcher3 = document.getElementById('switcher3');
    var switcher4 = document.getElementById('switcher4');

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
