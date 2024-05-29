let player = {
    name : "Zack",
    credit : 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false
let message = '';
let messageEl = document.getElementById('message')
let sumEl = document.querySelector('#sum');
let cardsEl = document.querySelector('#cards');

let playerEl = document.querySelector('#points');

playerEl.textContent = player.name + ": $" + player.credit;

function getRandomcard(){

    let randomNumber = Math.floor( Math.random() * 13 ) + 1;

    if(randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else{
        return randomNumber;
    }
}

function startGame() {
    
    isAlive = true;
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard);
    
    renderGame();
}

function renderGame(){
    if(sum <= 20){

        message = 'new card?';
    }
    else if(sum === 21){
    
        hasBlackJack = true;
        message = 'black jack';
    
    }else
    {
        isAlive = false;
        message = "YOU'RE out";
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {

    if(isAlive && !hasBlackJack){
        let card = getRandomcard();

        sum += card;

        cards.push(card);
        
        renderGame();
    }else {
        console.log('out');
    }

    
}


