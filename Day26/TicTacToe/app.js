let turn = "O";

let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const board_array = new Array(9).fill("E");

function checkWinner() {
    for (let [i,j,k] of winner) {
        if (
            board_array[i] !== "E" &&
            board_array[i] === board_array[j] &&
            board_array[j] === board_array[k]
        ) {
            return true;
        }
    }
    return false;
}

const board = document.querySelector('.board');

const printer = (event) => {

    const element = event.target;

    if(board_array[element.id] !== "E") {
        return;
    }

    if(turn === "O") {
        element.textContent = "O";
        board_array[element.id] = "O";

        if(checkWinner()) {
            document.getElementById('winningMessage').textContent = "Winner is O";
            board.removeEventListener('click', printer);
        }

        turn = "X";
    }
    else {
        element.textContent = "X";
        board_array[element.id] = "X";

        if(checkWinner()) {
            document.getElementById('winningMessage').textContent = "Winner is X";
            board.removeEventListener('click', printer);
        }

        turn = "O";
    }
};
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');
   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })

   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.addEventListener('click',printer);
})

board.addEventListener('click', printer);