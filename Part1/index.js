// console.log('JS Entered the chat!')

let player = 'X'


function play() {
    if (player === 'X'){
        player = 'O'
    }else{
        player = 'X'
    }
    let currentPlayer = document.querySelector("#current-player")
    currentPlayer.innerText = player
}


let squares = document.querySelectorAll(".square")


for (const square of squares){
square.addEventListener('click', play)
console.log(player)
}
console.log(player)