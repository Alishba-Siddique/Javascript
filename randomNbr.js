let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3) // 0-2.9999
    return randomIndex
}

console.log( getHand() )