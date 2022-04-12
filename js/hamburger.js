export default function hamburguerBtn(
    btn,
    svg1,
    svg2,
    menu,
    menuLink,
    falseBackgraund
) {
    const d = document;
    d.querySelector(btn).addEventListener("click", (e) => {
        d.querySelector(svg1).classList.toggle("none");
        d.querySelector(svg2).classList.toggle("none");
        d.querySelector(menu).classList.toggle("activo");
        d.querySelector(falseBackgraund).classList.toggle("none");

        d.addEventListener("click", (e) => {
            if (!e.target.matches(menuLink)) return false;
            d.querySelector(falseBackgraund).classList.add("none");
            d.querySelector(menu).classList.remove("activo");
            d.querySelector(svg1).classList.toggle("none");
            d.querySelector(svg2).classList.toggle("none");
        });
    });
    d.querySelector(falseBackgraund).addEventListener("click", (e) => {
        d.querySelector(falseBackgraund).classList.add("none");
        d.querySelector(menu).classList.toggle("activo");
        d.querySelector(svg1).classList.toggle("none");
        d.querySelector(svg2).classList.toggle("none");
    });
}
