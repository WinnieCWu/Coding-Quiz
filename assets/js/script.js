var startQuiz = document.querySelector('#start-quiz-button')
var timerEl = document.querySelector('#timer')
var start = document.querySelector('#start')

var timer = 60;

/*
onClick of Start Button, lead the function of arrayOfQuestions for jQuery
$("#start-quiz-button").click(function() {
    askQuestion();
});
*/

startQuiz.addEventListener('click', function() {
    setInterval(function(){ 
        timer--;
        timerEl.textContent = timer
    }, 1000);
    start.classList.add('hide')
    askQuestions();
    //stop the timer once it reaches 0
});

var askQuestions = function () {

    var containerEl = document.querySelector('#container')

    for (let i = 0; i < arrayOfQuestions.length; i++) {

    // create question html div, and adding question text
    var questionEl = document.createElement('div')
    var question = arrayOfQuestions[i].question;
    questionEl.textContent = question
    containerEl.appendChild(questionEl)
    

    // create choices html div, and add choices text
    var choicesEl = document.createElement('div')
    var choices = arrayOfQuestions[i].choices;
    var choicesOl = document.createElement('ol')
    var choicesLi = document.createElement('li')
    //var choicesLi2 = document.createElement('li')

        choicesLi.textContent = choices[i]
        //choicesLi2.textContent = choices[1]
        choicesOl.appendChild(choicesLi)
        //choicesOl.appendChild(choicesLi2)
        choicesEl.appendChild(choicesOl)
        //containerEl.appendChild(questionEl)
        containerEl.appendChild(choicesEl)
        
       arrayOfQuestions[arrayOfQuestions.length-1]

    }
    //will show each question and its 4 optiosn
    
    //listen for the click for 'answerSelected', and populate if correct or wrong on the footer. if wrong, decrease timer by 10
    // answerSelected.addEventListener('click', function() {
    //     for (let i = 0; i < choicesArray.length; i++) {
    //         if (answerSelected === false) //(write the proper code) {
    //             //populate  in footer <p class "wrong">
    //             wrongEl.textContent="Wrong!"
    //             } else {
    //                 //populate in footer <p class "correct"
    //                 correctEl.textContent="Correct!"
    //             }
    //         }
    //         $.get("footer.html", function(response){
    //             $('footer').html(response);
    //         });  

    // var ulEl = createElement('ul');

    // // loop over the array of choices
    // for (let i = 0; i < choicesArray.length; i++) {
    //     // create an html element like 'li'
    //     var liEl = document.createElement('li');
    //     // assign the choices array answer to the new li element using textContent
    //     liEl.textContent = choicesArray[i];
    //     // append liEl to ulEl
    //     ulEl.appendChild(liEl);
    // }
};
 

var arrayOfQuestions = [ //add on footer if selector is right/wrong
    {
        // object/ question 1
        question: 'Commonly used data types DO Not include:',
        choices: [
            'strings',
            'booleans',
            'alerts',
            'numbers',
        ],
        correctAnswer: 'alerts',
    },
    {
        // object/ question 2
        question: 'The condition in an if/else statement is enclosed with _______.',
        choices: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets',    
        ],
        correctAnswer: 'curly brackets',
    },
    {
        // object/ question 3
        question: 'Arrays in JavaScript can be used to store _______.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',    
        ],
        correctAnswer: 'all of the above',
    }, 
    {
        // object/ question 4
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        choices: [
            'commas',
            'curly brackets',
            'quotes',
            'parenthesis',
        ],
        correctAnswer: 'curly brackets',
    },
    {
        // object/ question 5
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: [
            'JavaScript',
            'terminal/bash',
            'for loops',
            'console.log',
        ],
        correctAnswer: 'console.log',
    }
];

//Create a footer section with thin line immediately after the last question
//build capability to capture in the footer if the selected response is 'Correct!' or 'Wrong!'
//and when answer is selected, change button color to brighter color

var yourFinalScoreEl = document.querySelector('#yourFinalScore');
//dynamically input 'Your final score is XX.', with XX being user's current score
document.querySelector("#yourFinalScore")
var finalScoreEl = document.createElement('initials');
//after the text Enter Initials:, build a <textarea> for user to input initials to submit initialEl
document.textContent.
onClick()

var viewHighScoresEl = document.querySelector('#viewHighScores');
//include 'Initials-Value of high score
//two buttons: Go back && Clear high scores

//when StartQuiz button is clicked, timer starts at 75
//then it subtracts by 10 if selected answer is wrong
//timer stops when all questions are answered