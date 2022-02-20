//global variables for DOM elements
var startQuiz = document.querySelector('#start-quiz-button')
var timerEl = document.querySelector('#timer')
var start = document.querySelector('#start')
var timer = 60;
var quizBox = document.querySelector(".quiz-box")
var quizQuestion
var quizAnswerOne
var quizAnswerTwo
var quizAnswerThree
var quizAnswerFour
var userScore = 0
/*
onClick of Start Button, lead the function of arrayOfQuestions for jQuery
$("#start-quiz-button").click(function() {
    askQuestion();
});
*/

startQuiz.addEventListener('click', startCount);
 
function startCount() {
    //putting in the countdown

    var timeInterval = setInterval(function(){ 
        if (timer >= 1) {
            timer--;
            timerEl.textContent = timer
        } if (timer === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
    start.classList.add('hide')
    askQuestions();
    //stop the timer once it reaches 0
};

var questionsAndAnswers = [ //add on footer if selector is right/wrong
    {   // object/ question 1
        question: 'Commonly used data types DO Not include:',
        answerOne: 'strings',
        answerTwo: 'booleans',
        answerThree: 'alerts',
        answerFour: 'numbers',
        correctAnswer: 'alerts',
    },
    {   // object/ question 2
        question: 'The condition in an if/else statement is enclosed with _______.',
        answerOne: 'quotes',
        answerTwo: 'curly brackets',
        answerThree: 'parenthesis',
        answerFour: 'square brackets',    
        correctAnswer: 'curly brackets',
    },
    {   // object/ question 3
        question: 'Arrays in JavaScript can be used to store _______.',
        answerOne: 'numbers and strings',
        answerTwo: 'other arrays',
        answerThree: 'booleans',
        answerFour: 'all of the above',    
        correctAnswer: 'all of the above',
    }, 
    {   // object/ question 4
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answerOne: 'commas',
        answerTwo: 'curly brackets',
        answerThree: 'quotes',
        answerFour: 'parenthesis',
        correctAnswer: 'curly brackets',
    },
    {    // object/ question 5
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerOne: 'JavaScript',
        answerTwo: 'terminal/bash',
        answerThree: 'for loops',
        answerFour: 'console.log',
        correctAnswer: 'console.log',
    }
];


//appending the questions and answer elements
var askQuestions = function () {


    for (let i = 0; i < questionsAndAnswers.length; i++) {
        document.getElementById(questionsAndAnswers[i].questions + "<br/>");
        for (let j = 0; j < questionsAndAnswers[i].choices.length; j++) {
        document.getElementById(questionsAndAnswers[i].choices[j] + "<br/>");
    
// create question html div, and adding question text 
    quizQuestion = document.createElement('h2');
    quizQuestion.className = "quiz-question";
    quizQuestion = questionsAndAnswers[i].question;
    quizQuestion.textContent = question;
    quizBox.appendChild(quizQuestion);

    quizAnswerBox = document.createElement('ul');

    quizAnswerOne = document.createElement('li');
    quizAnswerTwo = document.createElement('li');
    quizAnswerThree = document.createElement('li');
    quizAnswerFour = document.createElement('li');

    quizAnswerOne.className = "quiz-answer";
    quizAnswerTwo.className = "quiz-answer";
    quizAnswerThree.className = "quiz-answer";
    quizAnswerFour.className = "quiz-answer";

    quizBox.appendChild(quizAnswerBox);
    quizBox.appendChild(quizAnswerOne);
    quizBox.appendChild(quizAnswerTwo);
    quizBox.appendChild(quizAnswerThree);
    quizBox.appendChild(quizAnswerFour);

    quizAnswerOne.addEventListener('click', answerCheck);
    quizAnswerTwo.addEventListener('click', answerCheck);
    quizAnswerThree.addEventListener('click', answerCheck);
    quizAnswerFour.addEventListener('click', answerCheck);

   
//set attribute so other question and choice sets are hidden (data state), and visible after the previous click

viewHighScores.addEventListener('click', function() {
    start.classList.add('hide')
    askQuestions();
    //stop the timer once it reaches 0
});
//Create a footer section with thin line immediately after the last question
//build capability to capture in the footer if the selected response is 'Correct!' or 'Wrong!'
//and when answer is selected, change button color to brighter color

var yourFinalScoreEl = document.querySelector('#yourFinalScore');
yourFinalScoreEl.textContent = finalScore
yourFinalScore.appendChild('yourFinalScoreEl')

var finalScoreEl = document.createElement('p');


var initials = document.querySelector('.enter-initials');
finalScoreEl.textcontent= initials
yourFinalScore.appendChild('initials')
//after the text Enter Initials:, build a <textarea> for user to input initials to submit initialEl
//document.textContent.
//onClick()
var viewHighScoresEl = document.querySelector('#viewHighScores');
viewHighScoresEl.textContent=""

//checking local storage for current high schore
var highScore = localStorage.getItem("highScore")
if (highScore) {
    highScore = 0
} else {
    highScore= parseInt(highScore);
};