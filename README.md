
##A typing game.
#sei23-pasti-project1

### How to play ###
1) Click button to start game. 
2) Countdown begins.
3) Type exactly what is shown in the text box within the time given. (It's CaSe-SeNsItIvE!)
4) Press 'Enter' button when ready. 
5) 1 Point will be given if input typed matches text given. If not, 1 life will be deducted. Only given 3 lives during one game. 
6) If countdown reaches to ZERO, time's up! Game is over.
7) If lives reaches to Zero, no more chances! Game is over.



##HTML:##
1) Created divs and gave them classes and IDs. 
2) Created an input textbox for user input. 
3) Created a button to start game.

##CSS:##
1) Colours were introduced to be easy on the eyes.

##JS:##
1)Extracted all DOMs to be used for easier reference. (Reduce the need to toggle between index.html and script.js.)
2)Made a list of sentences and put them into an array. (Hardcode)
3)Used Math.floor(Math.random()) to generate random index. With random index, able to extract random sentence. 
4)addEventListener to button. When clicked, it will trigger start game. When game starts, random sentence will be generated.
5)Wrote a function to check if what the user typed is the same as the one given. (CaSe SeNsItIvE)
6)Message is given if the word is correct or incorrect.
----------------------
7) Score system is introduced. For every correct answer, the player would be given 1 point.
8) Lives are introduced. This is to represent the chances the player is given to give an incorrect answer. In a single game, the player is given 3 lives.
9) More arrays are made represented by different buttons. This is for the player to select different difficulty levels. Words for easy, Sentences for intermediate, Paragraphs for hard.
10)Different times are given for different levels.
-----------------------
# Furthers
1)Check letter as player types instead of checking match after hitting "enter".
2)As letters are checked, text would turn green for correct, red for incorrect.
3)Set userInputDisplay as none so only the text given can be seen.