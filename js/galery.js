const d = document;

let todoPortafolio = d.querySelector(".portafolio");
/*// div completo
console.log(todoPortafolio);
// los hijos
console.log(todoPortafolio.children);
// seleccionar hijo especifico
console.log(todoPortafolio.children[5]);
// seleccionar el primer y ultimo hijo
console.log(todoPortafolio.firstElementChild);
console.log(todoPortafolio.lastElementChild);
// seleccionar el hermano anterior y siguiente
console.log(todoPortafolio.lastElementChild.previousElementSibling);
console.log(todoPortafolio.firstElementChild.nextElementSibling);*/

for (let i = 0; i < todoPortafolio.children.length; i++) {
    let img = todoPortafolio.children[i];
    console.log(img);
}
