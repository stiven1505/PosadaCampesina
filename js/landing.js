(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');
    const formReservas = document.getElementById('formReservas');
    const aReservas = document.getElementById('a-reservas');

    const fechaLlegada = document.getElementById('fechaLlegada');
    const fechaSalida = document.getElementById('fechaSalida');
    const telefono = document.getElementById('telefono');
    const nombre = document.getElementById('nombre');

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