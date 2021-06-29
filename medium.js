// List easy questions
var mediumQuestions = [
    {
        question: "How many blue stripes are there on the U.S. flag?",
        firstOption: "6",
        secondOption: "7",
        thirdOption: "13",
        fourthOption: "0",
        answer: "d",
        hintAnswer: "None"
    }, {
        question: "Which planet is the hottest?",
        firstOption: "Venus",
        secondOption: "Saturn",
        thirdOption: "Mercury",
        fourthOption: "Mars",
        answer: "a",
        hintAnswer: "Second planet"
    }, {
        question: "What does the 'D' in 'D-Day' stand for?",
        firstOption: "Dooms",
        secondOption: "Dark",
        thirdOption: "Day",
        fourthOption: "Dunkirk",
        answer: "c",
        hintAnswer: "Year, month, week, and ..."
    }, {
        question: "How many bones are there in the human body?",
        firstOption: "206",
        secondOption: "205",
        thirdOption: "201",
        fourthOption: "209",
        answer: "a",
        hintAnswer: "(15^2)-(6*2/3)+(-15)"
    }, {
        question: "What is the #1 cookie in the U.S.?",
        firstOption: "Chips Ahoy!",
        secondOption: "Oreo",
        thirdOption: "Milano",
        fourthOption: "Girl Scout Thin Mints",
        answer: "b",
        hintAnswer: "Wonder if I ..."
    }
]

// Declaration button
const buttonMediumNext = document.getElementById('next-medium-question');
const buttonMediumPrev = document.getElementById('prev-medium-question');

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

// Declaration variable check easy question
var optionA = document.getElementById('a');
var optionB = document.getElementById('b');
var optionC = document.getElementById('c');
var optionD = document.getElementById('d');

// Function show easy question
function showMediumQuestion(currentQuestion) {
    var index = mediumQuestions[currentQuestion];
    questionContent.textContent = index.question;
    optionA.textContent = index.firstOption;
    optionB.textContent = index.secondOption;
    optionC.textContent = index.thirdOption;
    optionD.textContent = index.fourthOption;
}

// Display first easy question
showMediumQuestion(currentQuestion);

// Display next question
function showMediumNext() {
    currentQuestion += 1;
    if(currentQuestion == mediumQuestions.length) {
        return false;
    }
    showMediumQuestion(currentQuestion);
    errorMessage.style.display = "none";
    hintMessage.style.display = "none";
    level(currentQuestion + 1);
    return currentQuestion;
}

// Display prev question
function showMediumPrev() {
    currentQuestion -= 1;
    showMediumQuestion(currentQuestion);
    errorMessage.style.display = "none";
    hintMessage.style.display = "none";
    level(currentQuestion + 1);
    return currentQuestion;
}

// Function show level
function level (currentLevel) {
    document.getElementById('level').innerHTML = 'Level ' + currentLevel;
}

level(currentQuestion+1);

function check() {
    for(index = currentQuestion; index <= mediumQuestions.length; index++) {
        if(event.srcElement.id == mediumQuestions[index].answer && questionContent.textContent == mediumQuestions[index].question) {
            hintMessage.style.display = "block";
            errorMessage.style.display = "none";
            currentQuestion += 1;
            index += 1;
            totalHint += 1;
            if(index == mediumQuestions.length) {
                alert('Medium level completed');
            }
            showMediumQuestion(currentQuestion);
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
        alert(mediumQuestions[currentQuestion].hintAnswer);
        totalHint -=1;
    }
    return totalHint, false;
}