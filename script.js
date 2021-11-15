// ********* menu *********
((d) => {
    const $btnmenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");
    $btnmenu.addEventListener("click", (e) => {
        $btnmenu.firstElementChild.classList.toggle("none");
        $menu.classList.toggle("activo");

        d.addEventListener("click", e => {
            if (!e.target.matches(".menu a")) return false;

            $btnmenu.firstElementChild.classList.remove("none");
            $menu.classList.remove("activo");
        });
    })
})(document);