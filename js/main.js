//Recogida de inputs de nombres del HTML

let nombrePlayer1 = document.getElementById("namePl1");
let nombrePlayer2 = document.getElementById("namePl2");

//Recogida de Botones del HTML
let botonAceptarPlayer1 = document.getElementById("botonAceptarPlayer1");
let botonAceptarPlayer2 = document.getElementById("botonAceptarPlayer2");

//Evento que lanza el boton de Jugador 1. Comprueba campo, lee, guarda y adjudica al label superior el valor siempre que sea correcto.
botonAceptarPlayer1.addEventListener("click", () => {

    if (nombrePlayer1.value === "" || nombrePlayer1.value.length < 3) {
        document.getElementById("pMensaje1").innerHTML = ("Escribe un nombre que contenga <br> entre 3 y 12 caracteres");
        document.getElementById("namePl1").value = ("");
    } else {
        sessionStorage.setItem("nombreJugador1", JSON.stringify(nombrePlayer1.value));
        document.getElementById("labelNombre1").innerHTML = (nombrePlayer1.value);
        document.getElementById("namePl1").value = ("");
        document.getElementById("pMensaje1").innerHTML = ("");
        comprobarCampos();
    }

});

//Evento que lanza el boton de Jugador 2. Comprueba campo, lee, guarda y adjudica al label superior el valor siempre que sea correcto.
botonAceptarPlayer2.addEventListener("click", () => {

    if (nombrePlayer2.value === "" || nombrePlayer2.value.length < 3) {
        document.getElementById("pMensaje2").innerHTML = ("Escribe un nombre que contenga <br> entre 3 y 12 caracteres");
        document.getElementById("namePl2").value = ("");
    } else {
        sessionStorage.setItem("nombreJugador2", JSON.stringify(nombrePlayer2.value));
        document.getElementById("labelNombre2").innerHTML = (nombrePlayer2.value);
        document.getElementById("namePl2").value = ("");
        document.getElementById("pMensaje2").innerHTML = ("");
        comprobarCampos();
    }
});

//Función que comprueba que existen ambos nombres guardados en Session-storage para habilitar el boton de START
const comprobarCampos = () => {
    if ((sessionStorage.getItem("nombreJugador1") !== null) && (sessionStorage.getItem("nombreJugador2") !== null)) {
        document.getElementById("botonAceptarSeleccion").style.visibility = "visible";
        document.getElementById("pMensaje1").innerHTML = ("");
        document.getElementById("pMensaje2").innerHTML = ("");
    }
};

//Boton de START empezar JUEGO.
botonAceptarSeleccion.addEventListener("click", () => {
    window.open("../pages/juego.html", "_self");
})
