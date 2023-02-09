//Tablero logico de las celdas de los divs del grid
let logicBoard = Array.from(document.getElementsByClassName("boxes"));

let turn = true;

//Turnos iniciali<ados de los jugadores en 3 (decrecerá)
let turnPlayer1 = 3;
let turnPlayer2 = 3;

//Array logica del tablero donde pintamos en cada posicion la X o la O correspondiente al hacer click al ir jugando.
//Aquí se sobreescribiran cuando las vayamos moviendo o sustituyendo por el otro simbolo
let boardGame = ["", "", "", "", "", "", "", "", "",];

//Matriz de combinaciones ganadoras.
let chartWinner = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//Mapeo de las 'box' para escribir en ellas X y O en cada casilla
logicBoard.map(
    (box) => {
        // Evento / funcion que comprueba los turnos y va pintando X o O cambiando el turno y bajando los turnos
        box.addEventListener("click", () => {
            if ((box.innerHTML === "") && (turnPlayer1 > 0 || turnPlayer2 > 0)) {
                box.innerHTML = (turn) ? "X" : "O";
                //Decrementador de turnos
                if (turn) {
                    turnPlayer1--;
                } else {
                    turnPlayer2--;
                }
                //Meter en array logica del tablero la X y O en la posición adecuada
                boardGame[box.id] = (turn) ? "X" : "O";
                //Cambiamos turno
                turn = !turn;





                //Ejemplo de añadir una clase nueva que tienes en CSS a un elemento (classList.add)
                // box.classList.add('ejemplodeClase')

                //Ejemplo de añadir un elemento a otro elemento con HTML desde JS. Elemento a añadir entre ` `
                // box.innerHTML = `<p>EJEMPLODETEXTO </p>`
            }
        })
    }
)




//Recogida de datos inputs Seleccion de Jugadores y guardado en Session Storage

let nombrePlayer1 = document.getElementById("namePl1");
let nombrePlayer2 = document.getElementById("namePl2");


botonAceptarPlayer1.addEventListener("click", () => {


    if (nombrePlayer1.value === "" || nombrePlayer1.value.length < 3) {
        document.getElementById("pMensaje1").innerHTML = ("Escribe un nombre que contenga <br> entre 3 y 12 caracteres")
    } else {
        sessionStorage.setItem("nombreJugador1", JSON.stringify(nombrePlayer1.value));
        document.getElementById("labelNombre1").innerHTML = (nombrePlayer1.value);
        document.getElementById("namePl1").value = (""); 
    }
})
botonAceptarPlayer2.addEventListener("click", () => {

    if (nombrePlayer2.value === "" || nombrePlayer2.value.length < 3) {
        document.getElementById("pMensaje2").innerHTML = ("Escribe un nombre que contenga <br> entre 3 y 12 caracteres")
    } else {
        sessionStorage.setItem("nombreJugador2", JSON.stringify(nombrePlayer2.value));
        document.getElementById("labelNombre2").innerHTML = (nombrePlayer2.value);
        document.getElementById("namePl2").value = ("");   
    }
})

if (sessionStorage.getItem("nombreJugador1" !== null) && sessionStorage.getItem("nombreJugador2" !== null)) {
    
    document.getElementById("botonAceptarSeleccion").style.visibility = "visible";
}

botonAceptarSeleccion.addEventListener("click", () => {  
    window.open("../pages/juego.html", "_self");
})

