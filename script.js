var startBtn = document.querySelector('#start button');
var startEL = document.querySelector('#start');
var quizEL = document.querySelector('#quiz');
var endEL = document.querySelector('#end');
var timeEL = document.querySelector('#timer');
var submitBtn = document.querySelector('submit');
var questionsEL = document.querySelector('#questions')
var choiceA = document.querySelector('#A')
var choiceB = document.querySelector('#B')
var choiceC = document.querySelector('#C')
var choiceD = document.querySelector('#D')

var prompts = 'start';

var timeLeft = 60;

function displayPrompt() {
    if (prompts === 'start') {
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
        questions: 'What does HTML stand for?',
        choiceA: 'Hyper Text Markup Language',
        choiceB: 'Hyperlinks and Text Markup Language',
        choiceC: 'Home Tool Markup Language',
        choiceD: 'How The Monsters Look',
        correct: 'A'
    },
    {
        questions: 'What do you put around a string?',
        choiceA: 'Paranthesis',
        choiceB: 'Curly brackets',
        choiceC: 'Quotations',
        choiceD: 'Pound sign',
        correct: 'C'
    },
    {
        questions: 'What does the * do in CSS',
        choiceA: 'Applies snowflakes to an element',
        choiceB: 'Applies styling to the entire page',
        choiceC: 'Applies styling to all the other *',
        choiceD: 'None of the above',
        correct: 'B'
    },
    {
        questions: 'Which is the biggest header on an html page',
        choiceA: 'H1',
        choiceB: 'H2',
        choiceC: 'H3',
        choiceD: 'H6',
        correct: 'A'
    },
    {
        questions: 'What are the keys you press to get the bones of an HTML started for you',
        choiceA: '@ + Shift',
        choiceB: 'Tab + p',
        choiceC: 'Alt + Enter',
        choiceD: '! + Tab',
        correct: 'D'
    }
];

function setTime() {
    
}

function displayQuestions() {
    questionsEL.textContent = questions[0];
}

function displayTime() {
    timeEL.textContent = 'Time left: ' + timeLeft;
}

startBtn.addEventListener('click', function () {
    displayPrompt();
    prompts = 'quiz';
    var timeInterval = setInterval(function () {
        timeLeft--;
        displayTime();
        if (timeLeft === 0) {
            alert('Time is up!')
            clearInterval(timeInterval);
        }
    }, 1000);
});
setTime();







