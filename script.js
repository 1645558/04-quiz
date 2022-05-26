var startBtn = document.querySelector('#start');
var startEL = document.querySelector('#starting')
var quizEL = document.querySelector('#quiz');
var endEL = document.querySelector('#end');
var timeEL = document.querySelector('#timer');
var submitBtn = document.querySelector('#submit');
var questionsTextEL = document.querySelector('#questions-text');
var answerForQuestions = document.querySelector('.answer-buttons')

var highScore = 0;

var prompts = 'starting';

var currentQuestion = 0;

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

function displayAnswers() {

    questionsTextEL.textContent = questions[0].question;

    for (var i = 0; i < document.getElementsByClassName('answer-buttons').length; i++) {
        var choice = questions[0].answers[i];
        var button = document.getElementsByClassName('answer-buttons')[i];
        button.textContent = choice.text
    }

}


var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: '1. Hypertext Markup Language'},
            { text: '2. Hypertext Maker Language'},
            { text: '3. Hometext Markup Language'},
            { text: '4. None of the above' },
        ],
            correctAnswer: '1'
          
    },
    {
        question: 'What does * do in CSS?',
        answers: [
            { text: '1. Put snowflakes on the page'},
            { text: '2. Change the header elements'},
            { text: '3. Changes the style of everything on the page'},
            { text: '4. Moves elements by 10px'}
        ],
        correctAnswer: '3'
    },
    {
        question: 'What is the bigest header on an html page?',
        answers: [
            { text: 'H2'},
            { text: 'H3'},
            { text: 'H1'},
            { text: 'H6'}
        ],
        correctAnswer: '3'
    },
    {
        question: 'What do you put around a string?',
        answers: [
            { text: 'Paranthe' },
            { text: 'Quotations'},
            { text: 'Pound sign' },
            { text: 'Angled brackets'}
        ],
        correctAnswer: '2'

    },
    {
        question: 'What are the keys you press to get the starter code for HTML?',
        answers: [
            { text: '@ + Tab'},
            { text: 'Tab + #'},
            { text: '^ + Enter'},
            { text: '! + Tab'}
        ],
        correctAnswer: '4'
    }

];


function init() {
    displayPrompt();
}

function displayTime() {
    timeEL.textContent = 'Time left: ' + timeLeft;
}

answerForQuestions.addEventListener('click', function () {
    displayAnswers();
    questionsTextEL.textContent = questions[0].question;
    console.log('x has been clicked');
    
    if (currentQuestion < questions.length) {
        currentQuestion++;
    }
})

startBtn.addEventListener('click', function () {
    prompts = 'quiz';
    displayPrompt();
    var timeInterval = setInterval(function () {
        timeLeft--;
        displayTime();
        if (timeLeft === 0) {
            alert('Time is up!')
            clearInterval(timeInterval);
        }
    }, 1000);

});
init();
displayAnswers();






