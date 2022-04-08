export default function sendMail(form, loader, response) {
    const d = document;

    d.querySelector(form).addEventListener("submit", (e) => {
        e.preventDefault();
        d.querySelector(loader).classList.remove("none");
        fetch("https://formsubmit.co/ajax/san.agustin20.aqz@gmail.com", {
            method: "POST",
            body: new FormData(e.target),
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
                console.log(json);
                location.hash = "#gracias";
                d.querySelector(form).reset();
            })
            .catch((err) => {
                console.log(err);
                let message =
                    err.statusText || "Ocurrio un error, intente nuevamente";
                d
                    .querySelector(response)
                    .querySelector(
                        "h3"
                    ).innerHTML = `Error ${err.status}: ${message}`;
            })
            .finally(() => {
                d.querySelector(loader).classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                }, 3000);
            });
    });
}
