
let normas = document.getElementById("exampleModalCenter");
const lanzarNormas = () => {
    normas.classList.add("show");
    normas.style.display = "block";
}

let normasCerrar = document.getElementById("botonNormas");
const cerrarNormas = () => {
    normas.classList.remove("show");
    normas.style.display = "none";
}