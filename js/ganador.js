//Traer los datos(nombres de jugadores) de SessionStorage

let nombreJugadorGanador = JSON.parse(sessionStorage.getItem("ganadorDelJuego"));

document.getElementById("nombreDelGanador").innerHTML = (nombreJugadorGanador);

sessionStorage.clear();