//Traer los datos(nombres de jugadores) de SessionStorage

let nombreJugadorJuego1 = JSON.parse(sessionStorage.getItem("nombreJugador1"));
let nombreJugadorJuego2 = JSON.parse(sessionStorage.getItem("nombreJugador2"));

document.getElementById("nombrePlayer1Juego").innerHTML = (nombreJugadorJuego1);
document.getElementById("nombrePlayer2Juego").innerHTML = (nombreJugadorJuego2);


//Tablero logico de las celdas de los divs del grid
let logicBoard = Array.from(document.getElementsByClassName("boxes"));

let turn = true;

//Turnos inicializados de los jugadores en 3 (decrecerá)
let turnPlayer1 = 3;
let turnPlayer2 = 3;

document.getElementById("turnosPlayer1").innerHTML = (`Turnos restantes: ${turnPlayer1}`);
document.getElementById("turnosPlayer2").innerHTML = (`Turnos restantes: ${turnPlayer2}`);

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
                    document.getElementById("turnosPlayer1").innerHTML = (`Turnos restantes: ${turnPlayer1}`);
                } else {
                    turnPlayer2--;
                    document.getElementById("turnosPlayer2").innerHTML = (`Turnos restantes: ${turnPlayer2}`);
                }
                //Meter en array logica del tablero la X y O en la posición adecuada
                boardGame[box.id] = (turn) ? "X" : "O";
                //Cambiamos turno
                turn = !turn;
            }
        })
    }
)


/* BOTONES DE HOME Y RESET */

let botonReset = document.getElementById("btnReset");
let botonHome = document.getElementById("btnHome");


botonHome.addEventListener('click', () => {
    window.open("../index.html", "_self");
    nombreJugadorJuego1 = "";
    nombreJugadorJuego2 = "";
})

botonReset.addEventListener('click', () => {
    window.open("../pages/juego.html", "_self");
})















                //Ejemplo de añadir una clase nueva que tienes en CSS a un elemento (classList.add)
                // box.classList.add('ejemplodeClase')

                //Ejemplo de añadir un elemento a otro elemento con HTML desde JS. Elemento a añadir entre ` `
                // box.innerHTML = `<p>EJEMPLODETEXTO </p>`