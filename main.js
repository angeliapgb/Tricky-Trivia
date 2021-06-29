const level1 = document.getElementById('level-1');
const level2 = document.getElementById('level-2');
const level3 = document.getElementById('level-3');
const level4 = document.getElementById('level-4');
const level5 = document.getElementById('level-5');

// List questions
var questionList = [
    {
        question: "The Powerpuff Girls are 3 distinct colors, they are blue, green, and ...",
        answer: "red",
        hintAnswer: "First color of RGB"
    }, {
        question: "What is Sodium Chloride?",
        answer: "salt",
        hintAnswer: "NaCl"
    }, {
        question: "Which Disney princess sings 'Just Around The Riverbend'?",
        answer: "pocahontas",
        hintAnswer: "Native American woman"
    }, {
        question: "What is the longest river in the world?",
        answer: "nile",
        hintAnswer: "Located in Africa"
    }, {
        question: "What is the deadliest snake?",
        answer: "black mamba",
        hintAnswer: "Aespa debut song"
    }
]

// Declaration button
const buttonCheck = document.getElementById('check');
const buttonNext = document.getElementById('next-question');
const buttonPrev = document.getElementById('prev-question');

// Declaration error & hint
const errorMessage = document.getElementById('error-message');
const hintMessage = document.getElementById('hint-message');

// Declaration hint button
const hintButton = document.getElementById('hint');
const hintMsg = document.getElementById('hint-text');

// Declaration temp variable
var questionContent = document.getElementById('question');
var currentQuestion = 0;
var index = 0;

// Declaration variable calculation
var totalHint = 1;

// Declaration array of check
var answered = [false, false, false, false, false];

// Function show hard question
function showQuestion(indexQuestion) {
    var index = questionList[indexQuestion];
    questionContent.textContent = index.question;
}

// Display first hard question
showQuestion(currentQuestion);

// Display next question
function showNext() {
    currentQuestion += 1;
    if(currentQuestion == questionList.length) {
        return false;
    }
    showQuestion(currentQuestion);
    errorMessage.style.display = "none";
    hintMessage.style.display = "none";
    level(currentQuestion + 1);
    return currentQuestion;
}

// Display prev question
function showPrev() {
    currentQuestion -= 1;
    showQuestion(currentQuestion);
    errorMessage.style.display = "none";
    hintMessage.style.display = "none";
    level(currentQuestion + 1);
    if(currentQuestion == 0) {
        return false;
    }
    return currentQuestion;
}

// Function show level
function level (currentLevel) {
    document.getElementById('level').innerHTML = 'Level ' + currentLevel;
}

// Function unlocked next level
// function nextLevel(currentQuestion) {
//     if(answered[currentQuestion] == true) {
//         buttonNext.style.display = "block";
//         alert(currentQuestion);
//     } 
//     // else {
//     //     buttonNext.style.visibility = "hidden";
//     // }
// }

level(currentQuestion+1);

// Function check answer
function answerCheck() {
    var input = document.forms["user-input"]["user-answer"].value;

    for(index = currentQuestion; index <= questionList.length + 1; index++) {
        if(input == questionList[index].answer && questionContent.textContent == questionList[index].question) {
            hintMessage.style.display = "block";
            errorMessage.style.display = "none";
            currentQuestion += 1;
            index += 1;
            totalHint += 1;
            if(index == questionList.length) {
                alert('Hard level completed');
            }
            showQuestion(currentQuestion);
            level(currentQuestion + 1);
            return totalHint,false;
        } else {
            hintMessage.style.display = "none";
            errorMessage.style.display = "block";
            return false;
        }
    }
    return false;
}

// Function hint message
function messageHint() {
    if(totalHint < 1) {
        alert('Not enough hint');
    } else {
        alert(questionList[currentQuestion].hintAnswer);
        totalHint -=1;
    }
    return totalHint, false;
}