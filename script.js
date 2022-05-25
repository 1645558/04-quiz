var startBtn = document.querySelector('#start button');
var startEL = document.querySelector('#start');
var quizEL = document.querySelector('#quiz');
var endEL = document.querySelector('#end');
var timeEL = document.querySelector('#timer');
var submitBtn = document.querySelector('submit');
var choiceA = document.querySelector('#A')
var choiceB = document.querySelector('#B')
var choiceC = document.querySelector('#C')
var choiceD = document.querySelector('#D')

var prompt = 'start';

var timeLeft = 60;

var questions = [
    {
        questions: 'What does HTML stand for?',
        choiceA: 'Hyper Text Markup Language',
        choiceB: 'Hyperlinks and Text Markup Language',
        choiceC: 'Home Tool Markup Language', 
        choiceD: 'How The Monsters Look',
        correct: 'A'
    }
]

function displayPrompt() {
    if (prompt === 'start') {
        startEL.style.display = 'block'
        quizEL.style.display = 'none'
    }
}

function displayTime() {
    timeEL.textContent = 'Time left: ' + timeLeft;
}
function setTime() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        displayTime();

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startBtn.addEventListener('click', function () {
    prompt = 'start';

})

setTime();



