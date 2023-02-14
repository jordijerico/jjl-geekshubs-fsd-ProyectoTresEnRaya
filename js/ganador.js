//Traer los datos(nombres de jugadores) de SessionStorage
let nombreJugadorGanador = JSON.parse(sessionStorage.getItem("ganadorDelJuego"));

//Recojo unicamente el nombre del ganador y lo coloco en el label
document.getElementById("nombreDelGanador").innerHTML = (nombreJugadorGanador);

//Elimino el sessionStorage para reinicar la aplicacion sin datos
sessionStorage.clear();