var startBtn = document.querySelector('#start');
var startEL = document.querySelector('#starting')
var quizEL = document.querySelector('#quiz');
var endEL = document.querySelector('#end');
var timeEL = document.querySelector('#timer');
var submitBtn = document.querySelector('submit');
var questionsEL = document.querySelector('#questions');
var choiceA = document.querySelector('#A');
var choiceB = document.querySelector('#B');
var choiceC = document.querySelector('#C');
var choiceD = document.querySelector('#D');

var highScore = 0;

var prompts = 'starting';

var timeLeft = 60;

function displayPrompt() {
    if (prompts === 'starting') {
        startEL.style.display = 'block'
        quizEL.style.display = 'none'
        endEL.style.display = 'none'
    }
    if (prompts === 'quiz') {
        startEL.style.display = 'none'
        quizEL.style.display = 'block'
        endEL.style.display = 'none'
    }
    if (prompts === 'end') {
        startEL.style.display = 'none'
        quizEL.style.display = 'none'
        endEL.style.display = 'block'
    }
}

function (setNextQuestion) {

}

function (selectAnswer) {

}


var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hypertext Maker Language', correct: false },
            { text: 'Hometext Marker Language', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'What does * do in CSS?',
        answers: [
            { text: 'Put snowflakes on the page', correct: false },
            { text: 'Change the header elements', correct: false },
            { text: 'Changes the style of everything on the page', correct: true },
            { text: 'Moves elements by 10px', correct: false }
            
        ]
    },
    {
        question: 'What is the bigest header on an html page?',
        answers: [
            { text: 'H2', correct: false },
            { text: 'H3', correct: false },
            { text: 'H1', correct: true },
            { text: 'H6', correct: false }
        ]
        
    },
    {
        question: 'What do you put around a string?',
        answers: [
            { text: 'Paranthesis', correct: false },
            { text: 'Quotations', correct: true },
            { text: 'Pound sign', correct: false },
            { text: 'Angled brackets', correct: false }
        ]
        
    }, 
    {
        question: 'What are the keys you press to get the starter code for HTML?',
        answers: [
            { text: '@ + Tab', correct: false },
            { text: 'Tab + #', correct: false },
            { text: '^ + Enter', correct: false },
            { text: '! + Tab', correct: true }
        ]
    }
    
];
    

function init() {
    displayPrompt()
}

function displayQuestions() {
    questionsEL.textContent = questions[0];
}

function displayTime() {
    timeEL.textContent = 'Time left: ' + timeLeft;
}

startBtn.addEventListener('click', function() {
    prompts = 'quiz';
    displayPrompt();
    displayQuestions()
    var timeInterval = setInterval(function () {
        timeLeft--;
        displayTime();
        if (timeLeft === 0) {
            alert('Time is up!')
            clearInterval(timeInterval);
        }
    }, 1000);
});
init()







