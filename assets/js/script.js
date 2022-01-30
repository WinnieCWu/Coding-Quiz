var startQuiz = document.querySelector('#startQuizButton')

var timeInterval = setInterval(function(){
    //subtract 1 every second
    count--;
    if (count ===0) {
        //quiz ends and current score appears
    }
    //if answer is incorrect, subtract 10 seconds from current time
    setInterval();

});
//onClick of Start Button, lead the function of arrayOfQuestions
$("#start-quiz-button").click(function() {
    
})

var arrayOfQuestions = [ //add on footer if selector is right/wrong
    {
        // object/ question 1
        question: 'Commonly used data types DO Not include:';
        choices: [
            'strings',
            'booleans',
            'alerts',
            'numbers',
        ]
        correctAnswer: 'alerts'
    },
    {
        // object/ question 2
        question: 'The condition in an if/else statement is enclosed with _______.';
        choices: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets',    
        ]
        correctAnswer: 'curly brackets'
    },
    {
        // object/ question 3
        question: 'Arrays in JavaScript can be used to store _______.';
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',    
        ]
        correctAnswer: 'all of the above;'
    }, 
    {
        // object/ question 4
        question: 'String values must be enclosed within _______ when being assigned to variables.';
        choices: [
            'commas',
            'curly brackets',
            'quotes',
            'parenthesis',
        ]
        correctAnswer" 'curly brackets'
    },
    {
        // object/ question 5
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:';
        choices: [
            'JavaScript',
            'terminal/bash',
            'for loops',
            'console.log',
        ]
        correctAnswer" 'console.log'
    }
]

function askQuestion (){
    var askQuestions = 
}

console.log(arrayOfQuestions[0].question);
var choicesArray = arrayOfQuestions[0].choices;
var ulEl = createElement('ul');

// loop over the array of choices
for (let i = 0; i < choicesArray.length; i++) {
    // create an html element like 'li'
    var liEl = document.createElement('li');
    // assign the choices array answer to the new li element using textContent
    liEl.textContent = choicesArray[i];
    // append liEl to ulEl
    ulEl.appendChild(liEl);
}

startQuiz.addEventListener("click", arrayOfQuestions)

//Create a footer section with thin line immediately after the last question
//build capability to capture in the footer if the selected response is 'Correct!' or 'Wrong!'
//and when answer is selected, change button color to brighter color

var resultsPage = document.querySelector('#yourFinalScore')
//dynamically input 'Your final score is XX.', with XX being user's current score
//after the text Enter Initials:, build a <textarea> for user to input initials to submit

var highScoreRank = document.querySelector ('#viewHighScores')
//include 'Initials-Value of high score
//two buttons: Go back && Clear high scores

//when StartQuiz button is clicked, timer starts at 75
//then it subtracts by 10 if selected answer is wrong
//timer stops when all questions are answered


