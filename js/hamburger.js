export default function hamburguerBtn(btn, menu, menuLink, falseBackgraund) {
    const d = document;
    d.querySelector(btn).addEventListener("click", (e) => {
        d.querySelector(falseBackgraund).classList.toggle("none");
        d.querySelector(menu).classList.toggle("activo");

        d.addEventListener("click", (e) => {
            if (!e.target.matches(menuLink)) return false;
            d.querySelector(falseBackgraund).classList.add("none");
            d.querySelector(menu).classList.remove("activo");
        });
    });
    d.querySelector(falseBackgraund).addEventListener("click", (e) => {
        if (e.target.matches(falseBackgraund)) {
            d.querySelector(falseBackgraund).classList.add("none");
            d.querySelector(menu).classList.toggle("activo");
        }
    });
}
