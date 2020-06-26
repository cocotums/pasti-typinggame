//DOMs
let textDisplay = document.getElementById("textDisplay");
let userInput = document.getElementById("userInput");
let button = document.getElementById("button");
let message = document.getElementById("messageText");

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

let gamePlay = false;
let currentScore;
let finalScore;


//click button to start game

button.click(function() {

    gamePlay = true;
    currentScore = 0;
    finalScore = 0;
    userInput.value = null
})



// if (gamePlay) {

//generate random sentence
let sentenceSelector = sentences[Math.floor(Math.random() * sentences.length)].sentence;
//display selected sentence
textDisplay.innerHTML = sentenceSelector;
//addEventListener to input textbox
userInput.addEventListener("change", checkMatch);

// }


function checkMatch() {
    if (userInput.value === sentenceSelector) {
        message.innerHTML = "You got it!"
        currentScore = 20
        finalScore += currentScore
    } else {
        message.innerHTML = "nuuu!"
        currentScore = 0
    }
}