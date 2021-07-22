let balance = 0;
let bet = 0;
const arrColor = ["Red", "Black", "Green", "Blue", "Orange"]
const balanceInput = document.getElementById('balance'); //строка актуального баланса
const refillInput = document.getElementById('refill'); //строка ввода количества денег
const enteredBet = document.getElementById('userBet');//строка ввода ставки
const selectColor = document.getElementsByName('color')//строка выбора цвета

function addButtonClick() { //пополняем баланс
    balance += Number(refillInput.value)
    refillInput.value = ""
    updateUI()
}

function runRoulette() { //сравниваем предполагаемый и выигрышный цвет
    winnerColor = randomElement()
    selectedColor = userSelectColor()
    document.getElementById('winner').innerHTML = winnerColor
    return (winnerColor === selectColor) ? userBetWinner() : userBetLose()
}

function userBetLose() { //поведение при проигрыше
    balance -= Number(enteredBet.value)
    enteredBet.value = ""
    updateUI()
}

function userBetWinner() { //поведение при выигрыше
    balance += Number(enteredBet.value * 2)
    enteredBet.value = ""
    updateUI()    
}

function randomElement() { //возвращает выигрышный цвет
    let rand = Math.floor(Math.random() * arrColor.length)
    return arrColor[rand]
}

function userSelectColor() {  //узнаём какой цвет выбрал игрок
    for(let i = 0; i < selectColor.length; i++) {
        if(selectColor[i].checked){
            return arrColor[i]
        }
    }
}


function updateUI() { //обновляет значение текущего баланса 
    balanceInput.value = balance
    document.getElementById('balance').innerHTML = balance
}