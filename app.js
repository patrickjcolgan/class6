var pElOne = document.getElementById("p1");
var pElTwo = document.getElementById("p2");
var pElThree = document.getElementById("p3");
var pElFour = document.getElementById("p4");
var counter = 0;

var userName = prompt("Hey, what's your name?");
var els = [pElOne, pElTwo, pElThree, pElFour];

var questions = [
 "Do you think my name is Nurbek or Sally?",
 "Do you think I am from here or Texas?",
 "Is tennis my favorite hobby, Yes or No ?",
  "Guess a number between 1-10"
];

var answers = [
 "nurbek",
 "here",
 "yes",
 4
];

function game(question, answer, element){
  var userInput = prompt(question).toLowerCase();
  if (isNaN(parseInt(userInput)) === false) {
    userInput = parseInt(userInput);
  }
  if (typeof answer === 'number') {
    while (userInput !== answer) {
      if (userInput < answer) {
        element.textContent = 'your guess is too low';
        userInput = parseInt(prompt('Guess again.'))
      } else if (userInput > answer) {
        element.textContent = 'your guess is too high';
        userInput = parseInt(prompt('Guess again.'))
      }
    }
    //this handles correct amount of answer
    element.textContent = 'Great, you guessed the number right';
//}
  } else {
    if (userInput === answer) { // input matches answer
      element.textContent = 'Great, you guessed it right';
      counter++
    } else {
      element.textContent = 'Sorry, you guessed wrong';
    }
  }
}
for (i = 0; i < questions.length; i++){
  game(questions[i], answers[i], els[i]);
}
