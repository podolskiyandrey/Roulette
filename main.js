let balance = 0;
let bet = 0;
const arrColor = ["Red", "Black", "Green", "Blue", "Orange"]
const balanceInput = document.getElementById('balance');
const refillInput = document.getElementById('refill');
const enteredBet = document.getElementById('userBet');
const selectColor = document.getElementsByName('color')

function addButtonClick() {
    balance += Number(refillInput.value)
    refillInput.value = ""
    updateUI()
}

function runRoulette() {
    if(randomElement() === userSelectColor()){
        return userBetWinner()
    } return userBetLose()
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

function randomElement() {
    let rand = Math.floor(Math.random() * arrColor.length)
    return arrColor[rand]
}

function userSelectColor() {
    for(let i = 0; i < selectColor.length; i++) {
        if(selectColor[i].checked){
            return arrColor[i]
        }
    }
}

function updateUI() {
    balanceInput.value = balance
    document.getElementById('balance').innerHTML = balance
}