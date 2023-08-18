(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');
    const formReservas = document.getElementById('formReservas');
    const btnSubmitReservas = document.getElementById('btnSubmitReservas');

    const fechaLlegada = document.getElementById('fechaLlegada');
    const fechaSalida = document.getElementById('fechaSalida');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');

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
        e.preventDefault();

        let body = {
            "fechaLlegada": fechaLlegada.value,
            "fechaSalida": fechaSalida.value,
            "correo": correo.value,
            "telefono": telefono.value,
        }

        btnSubmitReservas.setAttribute('href', `mailto:oiarregoces@uniguajira.edu.co?subject=Nombre: ${body.nombre} - Correo: ${body.correo}&body=${body}`);


        btnSubmitReservas.setAttribute('data-bs-dismiss', 'modal');

    })

})()