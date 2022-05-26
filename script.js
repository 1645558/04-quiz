var startBtn = document.querySelector('#start');
var startEL = document.querySelector('#starting')
var quizEL = document.querySelector('#quiz');
var endEL = document.querySelector('#end');
var timeEL = document.querySelector('#timer');
var submitBtn = document.querySelector('submit');
var questionsEL = document.querySelector('#questions')
var choiceA = document.querySelector('#A')
var choiceB = document.querySelector('#B')
var choiceC = document.querySelector('#C')
var choiceD = document.querySelector('#D')

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

var questions = [
    {
        question: 'What does HTML stand for?\n(a) Hypertext Markup Language\n\
        (b) Hypertext Maker Language\n(c) Hometext Marker Language\n(d) None of the above',
        answer: 'a'
    },
    {
        question: 'What does * do in CSS?\n(a) Put snowflakes on the page\n\
        (b) Change the header elements\n(c) CHanges the style of everything on the page\n\
        (d) Moves elements by 10px',
        answer: 'c' 
    },
    {
        question: 'What is the bigest header on an html page?\n(a) H2\n\
        (b) H1\n(c) H3\n(d) H6',
        answer: 'b'
    },
    {
        question: 'What do you put around a string?\n(a) Paranthesis\n\
        (b) Quotations\n(c) Pound sign\n(d) Angled brackets',
        answer: 'b'
    }, 
    {
        question: 'What are the keys you press to get the starter code for HTML?\n(a) @ + Tab\n\
        (b) Tab + #\n(c) ^ + Enter\n(d) ! + Tab',
        answer: 'd'
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







