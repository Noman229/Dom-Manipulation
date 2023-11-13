let turnPlayerOne = true
let turnPlayerTwo = false

// Get & Set Players Name
let playerOne = prompt('You are player one please enter your name?')
let playerTwo = prompt('You are player two please enter your name?')

let firstPlayerName =  playerOne
let secondPlayerName = playerTwo

document.getElementById('firstPlayerName').textContent = firstPlayerName
document.getElementById('secondPlayerName').textContent = secondPlayerName


// Get Total Score
let firstPlayerTotalScore = document.getElementById('firstPlayerTotalScore')
let secondPlayerTotalScore = document.getElementById('secondPlayerTotalScore')

// Get Current Score
const boxOne = document.getElementsByClassName('box-1')
let firstPlayerCurrentScore = document.getElementById('firstPlayerCurrentScore')
let secondPlayerCurrentScore = document.getElementById('secondPlayerCurrentScore')
let playOneText = document.getElementById('playOneText')
let playTwoText = document.getElementById('playTwoText')

// Get Btns 
const playerOneCol = document.getElementById('playerOneCol')
const playerTwoCol = document.getElementById('playerTwoCol')
const newGameBtn = document.getElementById('newGameBtn')
const rollDiceBtn = document.getElementById('rollDiceBtn')
const holdBtn = document.getElementById('holdBtn')
const playerOneEmoji = document.getElementById('playerOneEmoji')
const playerTwoEmoji = document.getElementById('playerTwoEmoji')

// Get Img
let diceImg = document.getElementById('diceImg')

function winner() {
    
    if(turnPlayerOne) {
        if (firstPlayerTotalScore.textContent > 10){
            firstPlayerCurrentScore.remove()
            secondPlayerCurrentScore.remove()
            playerOneEmoji.src = 'assets/images/gif/happy.gif'
            playOneText.innerHTML = `<span>Congratulation!</span> ${firstPlayerName} is winner.`
            playerTwoEmoji.src = 'assets/images/gif/sad.gif'
            playTwoText.innerHTML = `<span>Opps!</span> ${secondPlayerName} is lost`
            firstPlayerTotalScore.classList.add('winner')

        }
    }else if(turnPlayerTwo) {
        if (secondPlayerTotalScore.textContent > 10){
            firstPlayerCurrentScore.remove()
            secondPlayerCurrentScore.remove()
            playerTwoEmoji.src = 'assets/images/gif/happy.gif'
            playTwoText.innerHTML = `<span>Congratulation!</span> ${secondPlayerName} is winner.`
            playerOneEmoji.src = 'assets/images/gif/sad.gif'
            playOneText.innerHTML = `<span>Opps!</span> ${firstPlayerName} is lost`
            secondPlayerTotalScore.classList.add('winner')
        }
    }
}

newGameBtn.addEventListener('click', () => {
    location.reload()
    firstPlayerTotalScore.textContent = 0
    secondPlayerTotalScore.textContent = 0
    firstPlayerCurrentScore.textContent = 0
    secondPlayerCurrentScore.textContent = 0
})




rollDiceBtn.addEventListener('click', () => {
    let randomNum = Math.ceil(Math.random() * 6)
    diceImg.src = 'assets/images/' + randomNum + '.png'
    if (turnPlayerOne){
        if (randomNum != 1) {
            firstPlayerCurrentScore.textContent =  randomNum
            firstPlayerTotalScore.textContent = String(Number(firstPlayerTotalScore.textContent) + randomNum)
            winner()
        }else{
            firstPlayerTotalScore.textContent = 0;
            alert(`The turn of ${secondPlayerName}`)
            turnPlayerOne = false
            turnPlayerTwo = true
        }
    }else if (turnPlayerTwo) {
        if (randomNum != 1) {
            secondPlayerCurrentScore.textContent = randomNum
            secondPlayerTotalScore.textContent = String(Number(secondPlayerTotalScore.textContent) + randomNum)
            winner()
        }else{
            secondPlayerTotalScore.textContent = 0;
            alert(`The turn of ${firstPlayerName}`)
            turnPlayerOne = true
            turnPlayerTwo = false

        }
    }
})

holdBtn.addEventListener('click', () => {
    if (turnPlayerOne) {
        turnPlayerOne = false
        turnPlayerTwo = true
        firstPlayerCurrentScore.textContent = 0
        alert(`The turn of ${secondPlayerName}`)

    }else if (turnPlayerTwo) {
        turnPlayerOne = true
        turnPlayerTwo = false
        secondPlayerCurrentScore.textContent = 0
        alert(`The turn of ${firstPlayerName}`)
    }
})

