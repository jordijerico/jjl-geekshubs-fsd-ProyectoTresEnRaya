
let logicBoard = Array.from(document.getElementsByClassName("boxes"));

let turn = true;

let turnPlayer1 = 3;
let turnPlayer2 = 3;


let boardGame = ["", "", "", "", "", "", "", "", "",];

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

                if (turn) {
                    turnPlayer1--;
                } else {
                    turnPlayer2--;
                }

                //Cambiamos turno
                turn = !turn;
            }
        })
    }
)