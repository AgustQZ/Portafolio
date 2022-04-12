import hamburguerBtn from "./hamburger.js";
import sendMail from "./sendMail.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerBtn(
        ".menu-btn",
        ".svg1",
        ".svg2",
        ".menu",
        ".menu a",
        ".false-background"
    );
    sendMail(".contact-form", ".contact-form-loader", ".form-response");
});
