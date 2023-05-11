let cards = [];
let sum =  0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById("msg-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let player = {
    name: 'Techna',
    chips: '146',
};

document.querySelector('#player-el').textContent = player.name + ': $' + player.chips;

function getRandomCard(){
    let num = Math.floor(Math.random() * 13 ) + 1;
    if(num === 1)
    {
        return 11;
    }else if(num > 10){
        return 10;
    }else{
        return num;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum =  firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20)
    {
        message = 'Do do want to draw a new card?' + ' 🧐';
    } else if (sum ===  21){
        message = 'Yay! You\'ve got the BlackJack!' + ' 🎉';
        hasBlackJack = true;
    } else{
        message = 'You\'re out of the game!' + ' 😭';
        isAlive = false;
    } 

    messageEl.textContent = message;
}


function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
