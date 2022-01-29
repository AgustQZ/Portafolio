// ********* para abrir el menu mobile *********
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

// ********* para abrir el spinner o loader *********
((d) => {
    const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".form-response");
    $form.addEventListener("submit", e => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/san.agustin20.aqz@gmail.com", {
            method:"POST",
            body: new FormData(e.target),
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
        .catch((err) => {
            console.log(err);
            let message = err.statusText || "Ocurrio un error, intente nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        }).finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
               location.hash = "#close"; 
            }, 3000);
        });
    })

})(document)