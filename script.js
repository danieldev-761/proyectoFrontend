// Wait for DOM to load completely
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message element
    const mensaje = document.getElementById("welcome-message");


    setTimeout(() => {
        mensaje.classList.remove("hidden");
    }, 300);


    setTimeout(() => {
        mensaje.classList.add("hidden");
    }, 3000);

    // Dynamic text changer button and text element
    const boton = document.getElementById("change-btn");
    const texto = document.getElementById("dynamic-text");

    // Array of texts to cycle through
    const texts_list = [
        "¡Bienvenido a mi portafolio! Aquí encontrarás mis proyectos y habilidades.",
        "Me apasiona el desarrollo web full-stack, la lógica y los algoritmos.",
        "Estoy aprendiendo JavaScript y haciendo mi sitio interactivo",
    ];

    let index = 0;

    // Change text on button click
    boton.addEventListener("click", function () {
        index++;

        // Reset to first text if at end
        if (index >= texts_list.length) {
            index = 0;
        }

        // Update text content
        texto.textContent = texts_list[index];
    });

});

// Project toggle functionality
document.addEventListener("DOMContentLoaded", function () {

    // All toggle buttons
    const botones = document.querySelectorAll(".btn-toggle");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            // Get the project card
            const card = boton.parentElement; // .project-card

            // Extra content to show/hide
            const contenido = card.querySelector(".project-extra");

            // Arrow icon
            const arrow = boton.querySelector(".arrow");

            // Toggle visibility
            contenido.classList.toggle("hidden");

            // Rotate arrow
            arrow.classList.toggle("rotated");

        });

    });

});

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        alert("Gracias por tu mensaje. Pronto te contactaré."); // Success message
    });

});