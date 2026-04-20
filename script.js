// Esperar a que el DOM cargue completamente

document.addEventListener("DOMContentLoaded", function () {

    const texts_list = [
        "¡Bienvenido a mi portafolio! Aquí encontrarás mis proyectos y habilidades.",
        "Me apasiona el desarrollo web full-stack, la lógica y los algoritmos.",
        "Estoy aprendiendo JavaScript y haciendo mi sitio interactivo",
        
    ];

    const mensaje = document.getElementById("welcome-message");

    // Mostrar mensaje
    setTimeout(() => {
        mensaje.classList.remove("hidden");
    }, 300);

    // Ocultarlo después de 3 segundos
    setTimeout(() => {
        mensaje.classList.add("hidden");
    }, 3000);


    const boton = document.getElementById("btn-cambiar");
    const texto = document.getElementById("texto-dinamico");

    let index = 0;

    boton.addEventListener("click", function () {
        index++;

        // volver al inicio si llega al final
        if (index >= texts_list.length) {
            index = 0;
        }

        // actualizar el texto
        texto.textContent = texts_list[index];
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".btn-toggle");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            // buscar la card actual
            const card = boton.closest(".project-card");

            // contenido dentro de la card
            const contenido = card.querySelector(".project-extra");

            // flecha
            const arrow = boton.querySelector(".arrow");

            // mostrar / ocultar
            contenido.classList.toggle("oculto");

            // rotar flecha
            arrow.classList.toggle("rotado");

        });

    });

});