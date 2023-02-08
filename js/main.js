let logicBoard = Array.from(document.getElementsByClassName("boxes"));

let turn = true;

let turnPlayer1 = 3;
let turnPlayer2 = 3;

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