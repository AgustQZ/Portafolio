import hamburguerBtn from "./hamburger.js";
import sendMail from "./sendMail.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
    // boton hamburguesa
    hamburguerBtn(
        ".menu-btn",
        ".svg1",
        ".svg2",
        ".menu",
        ".menu a",
        ".false-background"
    );
    // enviar correo de contacto
    sendMail(".contact-form", ".contact-form-loader", ".form-response");
});
