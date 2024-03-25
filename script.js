//variables
const arr = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;


//Get Dom Elements
const playerDiv = document.getElementById("player")
const resultDiv = document.getElementById("result")

document.querySelectorAll('.col').forEach(item => {
    item.addEventListener('click', function() {
        handleClick(this);
    });
});



//To start with Player "X"
playerDiv.innerHTML = `Current Player: "${currentPlayer}"`

//Handle Click Function
function handleClick(element) {
    console.log(gameOver)
    if (!gameOver) {
        const id = element.id;
        if(arr[id] != null) return;
        element.innerHTML = currentPlayer;
        arr[id] = currentPlayer;
        gameOver = checkWinner ();   
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X' ;
        playerDiv.innerHTML = `Current Player: ${currentPlayer}`
    } 
}


//check winner function
function checkWinner () {
    if ((arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6]) 
       ){
            resultDiv.innerHTML = `Congratulation !! Winner is : ${currentPlayer}`
            return true;
       }
    
       if (!arr.some((e) => e === null)) {
            resultDiv.innerHTML = `Well Played!! Match Drwan`
            return true;
       }
       return false;
}

