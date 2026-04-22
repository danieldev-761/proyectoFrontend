// Esperar a que el DOM cargue completamente

document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("welcome-message");

    
    setTimeout(() => {
        mensaje.classList.remove("hidden");
    }, 300);


    setTimeout(() => {
        mensaje.classList.add("hidden");
    }, 3000);


    const boton = document.getElementById("change-btn");
    const texto = document.getElementById("dynamic-text");


    const texts_list = [
        "¡Bienvenido a mi portafolio! Aquí encontrarás mis proyectos y habilidades.",
        "Me apasiona el desarrollo web full-stack, la lógica y los algoritmos.",
        "Estoy aprendiendo JavaScript y haciendo mi sitio interactivo",
        
    ];

    let index = 0;

    boton.addEventListener("click", function () {
        index++;

        if (index >= texts_list.length) {
            index = 0;
        }

        texto.textContent = texts_list[index];
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const botones = document.querySelectorAll(".btn-toggle");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const card = boton.parentElement; //project-card

            const contenido = card.querySelector(".project-extra");

            const arrow = boton.querySelector(".arrow");

            contenido.classList.toggle("hidden");

            arrow.classList.toggle("rotated");

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Gracias por tu mensaje. Pronto te contactaré."); 
    });

});