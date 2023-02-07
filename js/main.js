let tablero = Array.from(document.getElementsByClassName("boxes"));

let turno = true;
tablero.map(
    (box) => {
        box.addEventListener("click", () => {
            if (box.innerHTML === "") {
                box.innerHTML = (turno) ? "X" : "O";

                //Cambiamos turno
                turno = !turno;
            }
        })
    }
)