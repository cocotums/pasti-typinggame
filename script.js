//DOMs
let textDisplay = document.getElementById("textDisplay");
let userInput = document.getElementById("userInput");
let button = document.getElementById("button");
let message = document.getElementById("messageText");
let score = document.getElementById("scoreDisplay")
let timer = document.getElementById("timerDisplay")

sentences = [{
        id: 1,
        sentence: "cat is qut"
    },
    {
        id: 2,
        sentence: "cat is gato"
    },
    {
        id: 3,
        sentence: "cat is kucing"
    },
    {
        id: 4,
        sentence: "cat is mao"
    }
];

let gamePlay;
let time = 11;
let currentScore = 0;
let finalScore = 0;

// //click button to start game

button.addEventListener("click", startGame);


//start game
function startGame() {
    //show the randomly selected sentence from array
    displaySentence(sentences);
    //start countdown timer
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50)
        //addEventListener to input textbox
    userInput.addEventListener("input", checkMatch())

}


function displaySentence() {
    //generate random sentence from array
    let randomIndex = Math.floor(Math.random() * sentences.length)
        //display selected sentence
    textDisplay.innerHTML = sentences[randomIndex].sentence;
}


function countdown() {
    if (time > 0) {
        time--
    } else if (time === 0) {
        gamePlay = false;
        message.innerHTML = "time's up!"
    }
    //display time
    timer.innerHTML = time
}

function game() {
    if (checkWordMatch()) {
        gamePlay = true;
        time = 11;
        displaySentence(sentences)
        currentScore = 10
        finalScore += currentScore
    }
    //display score
    score.innerHTML = "Your score:" + finalScore
}

function checkWordMatch() {
    if (userInput.value === textDisplay.innerHTML) {
        message.innerHTML = "You got it!"
        return true;
    } else {
        gamePlay = false;
        return false;
    }
}

function checkStatus() {
    if (gamePlay == false && time === 0) {
        message.innerHTML = "You're done"
    }
}