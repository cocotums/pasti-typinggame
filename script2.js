//DOMs
let textDisplay = document.getElementById("textDisplay");
let userInputDisplay = document.getElementById("userInput");
let button = document.getElementById("button");
let messageDisplay = document.getElementById("messageText");
let scoreDisplay = document.getElementById("scoreDisplay");
let timerDisplay = document.getElementById("timerDisplay");
let timeMsgDisplay = document.getElementById("timeMsgDisplay")
let livesDisplay = document.getElementById("livesDisplay")

//arrays
let sentences = ["cat is qut", "cat is gato", "cat is kucing", "cat is mao"];
let words = ["professor",
    "candidate",
    "preference",
    "marketing",
    "championship",
    "apartment",
    "university",
    "instruction",
    "revolution",
    "economics",
    "awareness",
    "engineering",
    "understanding",
    "classroom",
    "personality",
    "cigarette",
    "administration",
    "assignment",
    "organization",
    "interaction",
    "perspective",
    "entertainment",
    "variation",
    "environment",
    "expression",
    "management",
    "literature",
    "community",
    "promotion",
    "restaurant",
    "celebration",
    "independence",
    "difference",
    "television",
    "connection",
    "philosophy",
    "conclusion",
    "permission",
    "maintenance",
    "association",
    "communication",
    "opportunity",
    "technology",
    "performance",
    "confusion",
    "indication",
    "suggestion",
    "president",
    "recording",
    "signature"
];
let paragraphs = [
    "She had come to the conclusion that you could tell a lot about a person by their ears.The way they stuck out and the size of the earlobes could give you wonderful insights into the person.Of course, she couldn't scientifically prove any of this, but that didn't matter to her.Before anything else, she would size up the ears of the person she was talking to.",
    "Do you think you're living an ordinary life? You are so mistaken it's difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?",
    "One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the next day would be Christmas...",

    "I'm going to hire professional help tomorrow. I can't handle this anymore.She fell over the coffee table and now there is blood in her catheter.This is much more than I ever signed up to do. It was a question of which of the two she preferred.On the one hand, the choice seemed simple.The more expensive one with a brand name would be the choice of most.It was the easy choice.The safe choice.But she wasn 't sure she actually preferred it.",

    "Hopes and dreams were dashed that day.It should have been expected, but it still came as a shock.The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen.That possibility had grown from hope to an undeniable belief it must be destiny.That was until it wasn 't and the hopes and dreams came crashing down.",

    "Dave found joy in the daily routine of life.He awoke at the same time, ate the same breakfast and drove the same commute.He worked at a job that never seemed to change and he got home at 6 pm sharp every night.It was who he had been for the last ten years and he had no idea that was all about to change.",

    "It had been her dream for years but Dana had failed to take any action toward making it come true.There had always been a good excuse to delay or prioritize another project.As she woke, she realized she was once again at a crossroads.Would it be another excuse or would she finally find the courage to pursue her dream ? Dana rose and took her first step.",

    "I'm meant to be writing at this moment. What I mean is, I'm meant to be writing something else at this moment.The document I'm meant to be writing is, of course, open in another program on my computer and is patiently awaiting my attention. Yet here I am plonking down senseless sentiments in this paragraph because it's easier to do than to work on anything particularly meaningful.I am grateful for the distraction.",

    "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",

    "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",

    "There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of staring again.",

    "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?",

    "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",

    "Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.",

    "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.",

    "The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.",

    "Colors bounced around in her head. They mixed and threaded themselves together. Even colors that had no business being together. They were all one, yet distinctly separate at the same time. How was she going to explain this to the others?",

    "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",

    "She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun.",

    "It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it."
];

let gamePlay = false;
let score = 0;
let time = 11;
let lives = 3;

//     //click on button to start game
button.addEventListener("click", function() {
    gamePlay = true;
    userInput.innerHTML = "";
    messageDisplay.innerHTML = "";
    timerDisplay.innerHTML = 0;
    startGame();
})

function startGame() {
    console.log("GAME START");
    if (gamePlay) {
        displaySentence(sentences)
        setInterval(countdown, 1000);
    }
}

function displaySentence() {
    //generate random sentence from array
    let randomIndex = Math.floor(Math.random() * sentences.length)
        //display selected sentence
    textDisplay.innerHTML = sentences[randomIndex];
    console.log(textDisplay.innerHTML)
}

function countdown() {
    if (time > 0) {
        time--
    } else if (time === 0) {
        gamePlay = false;
        timeMsgDisplay.innerHTML = "time's up!"
    }
    //display time
    timerDisplay.innerHTML = time
}


userInput.addEventListener("change", checkWordMatch)

function checkWordMatch() {
    if (userInput.value === textDisplay.innerHTML) {
        messageDisplay.innerHTML = "You got it!"
        score++
        scoreDisplay.innerHTML = score;
        displaySentence(sentences);
        userInput.value = "";
        time = 11;
        setTimeout(1000, countdown);
    } else {
        if (lives > 0) {
            lives--;
            livesDisplay.innerHTML = lives;
            messageDisplay.innerHTML = "nuuuu!";
        } else {
            messageDisplay.innerHTML = "game over"
        }
    }
}