// let count = 0;
// let counter = document.getElementById('myH2');
// let addBtn = document.getElementById('increment-btn');
// let lessBtn = document.getElementById('decrement-btn')
// let resetBtn = document.getElementById('reset-btn');
// let saveBtn = document.getElementById('saveBtn');
// let previousBar = document.getElementById('previous')

// addBtn.onclick = function add(){
//     count+=1
//     counter.innerText = count;
// }

// saveBtn.onclick = function save(){
//    previousBar.innerText += ` ${count} - `
//    counter.innerText = 0;
//    count = 0;
// }

// lessBtn.onclick = function less(){
//     count-=1;
//     counter.innerText = count;
// }

// resetBtn.onclick = function reset(){
//     count = 0;
//     counter.innerText = count;
// }


// 2

// let firstName = "abcd "
// let lastName = 'efgh'
// let fullName = firstName + lastName;

// console.log(fullName);




// 3

// let name  = 'Linda';
// let greeting = 'Hi there';

// function greet(){

//     greetoutput = greeting + ", " + name + "!";
//     console.log(greetoutput);
// }

// greet();


// 4
// let myPoints = 3;

// function add3Points(){
//     myPoints+=3;
// }

// function remove1point() {
//     myPoints-=1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1point()
// remove1point()

// console.log(myPoints);



// 5
// 22 18 65 59 4 1114



// 6
// let purchase = document.getElementById('purchase-btn');
// let errorTag = document.getElementById('error')


// purchase.onclick = function errorMsg(){
//     errorTag.textContent = 'Something went wrong, Please try again'
// }



// 7
// let num1 = 7;
// let num2 = 10;

// document.getElementById('num1').textContent = num1;
// document.getElementById('num2').textContent = num2;


// let addBtn = document.getElementById('add');
// let subtractBtn = document.getElementById('subtract');
// let multiplyBtn = document.getElementById('multiply');
// let divivdeBtn = document.getElementById('divide');

// let result = document.getElementById('result');

// addBtn.onclick = function add(){
//     result.textContent = ` sum : ${num1 + num2}`;
// }

// subtractBtn.onclick = function subrtact(){
//     result.textContent = ` difference : ${num1 - num2}`;
// }

// multiplyBtn.onclick = function multiply(){
//     result.textContent = ` Product : ${num1 * num2}`;
// }

// divivdeBtn.onclick = function divide(){
//     result.textContent = ` result : ${num1/num2}`;
// }



// 8
// let firstCard = 10;
// let SecondCard = 11;

// let sum = firstCard + SecondCard;

// if (sum < 21){
//     console.log('🙂');
// }
// else if(sum === 21){
//     console.log('🤩');
// }

// else{
//     console.log('😭');
// }



// 9
// let age = 21;
// if (age >= 21){
//     console.log('Welcome !');
// }else{
//     console.log('You cannot enter the club!');
// }



// 10
// let age = 90;
// if (age < 100){
//     console.log('Not eligible');
// }else if( age === 100){
//     console.log('Eligble');
// }else{
//     console.log('You already have one');
// }



// 11

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


