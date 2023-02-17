// Funcion para el boton de abrir el modal de normas
let normas = document.getElementById("exampleModalCenter");
const lanzarNormas = () => {
    normas.classList.add("show");
    normas.style.display = "block";
}

//Funcion para el boton de cerrar el modal de normas
let normasCerrar = document.getElementById("botonNormas");
const cerrarNormas = () => {
    normas.classList.remove("show");
    normas.style.display = "none";
}