let balance = 0;
let bet = 0;
const arrColor = ["Red", "Black", "Green", "Blue", "Orange"]
const balanceInput = document.getElementById('balance');
const refillInput = document.getElementById('refill');
const enteredBet = document.getElementById('userBet');

function addButtonClick() {
    balance += Number(refillInput.value)
    refillInput.value = ""
    updateUI()
}

function runRoulette() {
    let choiceColor = document.choiceColor.color.value
    console.log(choiceColor)
}

function userBetLose() {
    balance -= Number(enteredBet.value)
    enteredBet.value = ""
    updateUI()
}

function userBetWinner() {
    balance += Number(enteredBet.value * 2)
    enteredBet.value = ""
    updateUI()    
}

function RandomElement() {
    let rand = Math.floor(Math.random() * arrColor.length)
    return arrColor[rand]
}

function updateUI() {
    balanceInput.value = balance
    document.getElementById('balance').innerHTML = balance
}


