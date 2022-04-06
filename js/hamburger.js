export default function hamburguerBtn(btn, menu, menuLink) {
    const d = document;
    d.querySelector(btn).addEventListener("click", (e) => {
        d.querySelector(btn).firstElementChild.classList.toggle("none");
        d.querySelector(menu).classList.toggle("activo");

        d.addEventListener("click", (e) => {
            if (!e.target.matches(menuLink)) return false;
            d.querySelector(btn).firstElementChild.classList.remove("none");
            d.querySelector(menu).classList.remove("activo");
        });
    });
}
