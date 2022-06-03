//global variables for DOM elements
var startQuiz = document.querySelector('#start-quiz-button')
var timerEl = document.querySelector('#timer')
var start = document.querySelector('#start')
var timer = 60;
var userScore = 0
var quizBox = document.querySelector(".quiz-box")
var question
var choices
var answer
var i = 0
var topHighScoreName
var highScore


startQuiz.addEventListener('click', startCount);

console.log(localStorage.getItem("scores"));

function startCount() {
    //putting in the countdown
    var timeInterval = setInterval(function(){ 
        if (timer >= 1) {
            timer--;
            timerEl.textContent = timer
            //stop the timer once it reaches 0
        } if (timer === 0){
            clearInterval(timeInterval);
            timer.textContent = "Game Over!"
        }
        //execute a function ever 1000milliseconds
    }, 1000);
    start.classList.add('hide')
    askQuestions();
};

var questionsAndAnswers = [ //add on footer if selector is right/wrong
    {   // object/ question 1
        question: 'Commonly used data types DO Not include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {   // object/ question 2
        question: 'The condition in an if/else statement is enclosed with _______.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'], 
        answer: 'curly brackets'
    },
    {   // object/ question 3
        question: 'Arrays in JavaScript can be used to store _______.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],    
        answer: 'all of the above'
    }, 
    {   // object/ question 4
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'curly brackets'
    },
    {    // object/ question 5
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    }
];

//appending the questions and answer elements
var askQuestions = function () {
// create question html div, and adding question text 
    quizQuestion = document.createElement('h3');
    quizQuestion.className = "quiz-question";
    quizQuestion.textContent = questionsAndAnswers[i].question;
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

   var answerCheck = function(event) {
       if (event.target.textContent === questionsAndAnswers[i].correctAnswer) {
           userScore = timer + userScore;
           quizQuestion.textContent = "Correct!";
       } else {
           //if incorrect answer, deduct 10 sec
           timer = timer - 10;
           quizQuestion.textContent = "Wrong!"
       }
       i++;
       nextQuestions()
    };
};

//update and display next questions
var nextQuestions = function() {
    if (i < questionsAndAnswers.length) {
        quizQuestion.textContent = questionsAndAnswers[i].question;
        quizAnswerOne.textContent = questionsAndAnswers[i].answerOne;
        quizAnswerTwo.textContent = questionsAndAnswers[i].answerTwo;
        quizAnswerThree.textContent = questionsAndAnswers[i].answeFour;
    } else {
        stopQuiz();
    }
};

//stop the quiz
var stopQuiz = function() {
    quizAnswerOne.remove();
    quizAnswerTwo.remove();
    quizAnswerThree.remove();
    quizAnswerFour.remove();
    clearInterval(timeInterval);

    quizQuestion.textContent = `You scored ${userScore} points!`

    finalScoreEl.classList.remove('hide');

    var initialsEl = document.querySelector('.input-initials');
    initialsEl.textContent= 'Please enter your initials to save your score:'
    quizBox.appendChild(intialsEl);

    var userNameInput = document.createElement("input");
    userNameInput.setAttribute("type", "text");
    userNameInput.setAttribute("id", "user-initials");
    userNameInput.className="input-box";
    quizBox.appendChild(userNameInput);

    var submitUserInfo = document.createElement("btn");
    submitUserInfo.className = "submitInitials";
    submitUserInfo.textContent = "Submit!";
    
    quizBox.appendChild(submitUserInfo);


    var viewHighScoresEl = document.querySelector('#viewHighScores');
    viewHighScoresEl.textContent="View High Scores";
    
    var viewHighScores = viewHighScores.addEventListener('click', function() {
  });
};
//Create a footer section with thin line immediately after the last question
//build capability to capture in the footer if the selected response is 'Correct!' or 'Wrong!'
//and when answer is selected, change button color to brighter color
//add button to 'go back' or 'clear history'

//checking local storage for current high schore

var scoringFunction = function () {
    //check if userScore is > current highest score
    if (userScore > highScore) {
        highScore = userScore;
        topHighScoreName = userNameInput.value(trim);
    } else {
        topHighScoreName = "";
    }
    //JSON.stringify(topHighScore);
};

JSON.stringify(userScore);
//JSON.stringify(highScore);

const scoresArray =[{"userInitials", userScore}, {"userInitials", userScore},...];
    //ie [{WW:30}, {CMS:27}]
let highScoresString

var saveHighScores = function() {
    localStorage.setInput("userInitials", timerValue)
    localStorage.setItem("userScore", score)
    localStorage.setItem("userInitials", "userScore");
    localStorage.getItem("userInitials");
    JSON.stringify(scoresArray);  
    document.getElementById("div").innerHTML="highScoresString";
    
    
    if (highScore) {
        highScore = 0
    } else {
        highScore= parseInt(highScore);
    };
}
askQuestions();