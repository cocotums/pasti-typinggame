//DOMs
let textDisplay = document.getElementById("textDisplay");
let userInputDisplay = document.getElementById("userInput");
let buttonWords = document.getElementById("button1");
let buttonSentences = document.getElementById("button2");
let buttonParagraphs = document.getElementById("button3");
let messageDisplay = document.getElementById("messageText");
let scoreDisplay = document.getElementById("scoreDisplay");
let timerDisplay = document.getElementById("timerDisplay");
let timeMsgDisplay = document.getElementById("timeMsgDisplay")
let livesDisplay = document.getElementById("livesDisplay")

//arrays
let sentences = ["Andy loved to sleep on a bed of nails.",
    "She was sad to hear that fireflies are facing extinction due to artificial light, habitat loss, and pesticides.",
    "You bite up because of your lower jaw.",
    "There can never be too many cherries on an ice cream sundae.",
    "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.",
    "I am happy to take your donation; any amount will be greatly appreciated.",
    "The thunderous roar of the jet overhead confirmed her worst fears.",
    "The shark-infested South Pine channel was the only way in or out.",
    "There are no heroes in a punk rock band.",
    "Carol drank the blood as if she were a vampire.",
    "Beach-combing replaced wine tasting as his new obsession.",
    "Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.",
    "When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.",
    "They did nothing as the raccoon attacked the lady’s bag of food.",
    "You can't compare apples and oranges, but what about bananas and plantains?",
    "Even with the snow falling outside, she felt it appropriate to wear her bikini.",
    "I hear that Nancy is very pretty.",
    "Three years later, the coffin was still full of Jello.",
    "Fluffy pink unicorns are a popular status symbol among macho men.",
    "It was always dangerous to drive with him since he insisted the safety cones were a slalom course.",
    "My dentist tells me that chewing bricks is very bad for your teeth.",
    "She used her own hair in the soup to give it more flavor.",
    "They were excited to see their first sloth.",
    "The Guinea fowl flies through the air with all the grace of a turtle.",
    "It was the scarcity that fueled his creativity.",
    "Weather is not trivial - it's especially important when you're standing in it.",
    "Joe made the sugar cookies; Susan decorated them.",
    "The beauty of the African sunset disguised the danger lurking nearby.",
    "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.",
    "He ran out of money, so he had to stop playing poker.",
    "When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
    "Doris enjoyed tapping her nails on the table to annoy everyone.",
    "Nobody has encountered an explosive daisy and lived to tell the tale.",
    "Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?",
    "Lets all be unique together until we realise we are all the same.",
    "When she didn’t like a guy who was trying to pick her up, she started using sign language.",
    "Pair your designer cowboy hat with scuba gear for a memorable occasion.",
    "The fish listened intently to what the frogs had to say.",
    "The waitress was not amused when he ordered green eggs and ham.",
    "It was a slippery slope and he was willing to slide all the way to the deepest depths.",
    "You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
    "If my calculator had a history, it would be more embarrassing than my browser history.",
    "I come from a tribe of head-hunters, so I will never need a shrink.",
    "She had the gift of being able to paint songs.",
    "He found the chocolate covered roaches quite tasty.",
    "If I don’t like something, I’ll stay away from it."
];

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

    "There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination.",

    "Nothing seemed to move until the moment she began to take her eyes off the tree.Then in the corner of her eye, she would see the movement again and begin the process of staring again.",

    "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?",

    "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",

    "Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.",

    "It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.",

    "The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.",

    "Colors bounced around in her head. They mixed and threaded themselves together. Even colors that had no business being together. They were all one, yet distinctly separate at the same time. How was she going to explain this to the others?",

    "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",

    "She counted. One. She could hear the steps coming closer. Two. Puffs of breath could be seen coming from his mouth. Three. He stopped beside her. Four. She pulled the trigger of the gun.",

    "It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it.",

    "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.",

    "It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case. The deadline had arrived and the project remained unfinished.",

    "It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare.",

    "If you can imagine a furry humanoid seven feet tall, with the face of an intelligent gorilla and the braincase of a man, you'll have a rough idea of what they looked like -- except for their teeth. The canines would have fitted better in the face of a tiger, and showed at the corners of their wide, thin-lipped mouths, giving them an expression of ferocity."
];

let gamePlay = false;
let score = 0;
let time = 11;
let lives = 3;

//different buttons
buttonSentences.addEventListener("click", function() {
    console.log(buttonSentences.innerHTML)
})
buttonParagraphs.addEventListener("click", function() {
        console.log(buttonParagraphs.innerHTML)
    })
    //     //click on button to start game
buttonWords.addEventListener("click", function() {
    gamePlay = true;
    userInput.innerHTML = "";
    messageDisplay.innerHTML = "";
    timerDisplay.innerHTML = 0;
    startGame();
})

// make this function take an argument that sets the array to use
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
        scoreDisplay.innerHTML = "Your score is: " + score;
        displaySentence();
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


//create new buttons in html
//commit--done
//add eventlisteners that will console.log the text on the button
//commit
//create a global gameArray variable to _refer to_ the selected array
//update the eventListeners to _set the gameArray variable_
// commit
// update displaySentence _function_ to use gameArray internally instead