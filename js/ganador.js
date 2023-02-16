//Traer los datos(nombres de jugadores) de SessionStorage
let nombreJugadorGanador = JSON.parse(sessionStorage.getItem("ganadorDelJuego"));

//Recojo unicamente el nombre del ganador y lo coloco en el label
document.getElementById("nombreDelGanador").innerHTML = (nombreJugadorGanador);

//Elimino el sessionStorage para reinicar la aplicacion sin datos
sessionStorage.clear();


//JAVASCRIPT QUE DA EFECTO A NOMBRE GANADOR
var textWrapper = document.querySelector('.finalWinner');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.finalWinner .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
  });