import hamburguerBtn from "./hamburger.js";
import sendMail from "./sendMail.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerBtn(".menu-btn", ".menu", ".menu a");
    sendMail(".contact-form", ".contact-form-loader", ".form-response");
});
