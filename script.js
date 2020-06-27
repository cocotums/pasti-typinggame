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

let gamePlay = false;;
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
    userInput.value = null
        //addEventListener to input textbox
    userInput.addEventListener("change", checkMatch);

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
    timer.innerHTML = time
}

function checkMatch() {
    if (userInput.value === textDisplay.innerHTML) {
        message.innerHTML = "You got it!"
        currentScore = time
        finalScore += currentScore
            //display score
        score.innerHTML = finalScore
        startGame()

        return true;
    } else {
        message.innerHTML = "nuuu!"
        gamePlay = false;
        return false;
    }
}