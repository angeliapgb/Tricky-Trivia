// List easy questions
var easyQuestions = [
    {
        question: "Olympic swimming pool is 50 meters long.",
        answer: "yes",
        hintAnswer: "Half of 1km long"
    }, {
        question: "Cynophobia is a fear of cyan",
        answer: "no",
        hintAnswer: "Fear of animals who like to bark"
    }, {
        question: "Coca-cola was the first soft drink in space",
        answer: "yes",
        hintAnswer: "Its logo base color is red and white"
    }, {
        question: "Deer is an animal can be seen on the Porsche logo",
        answer: "no",
        hintAnswer: "Normal skin version of zebra"
    }, {
        question: "Brown is the rarest M&M color",
        answer: "yes",
        hintAnswer: "Color produceed by mixing red, yellow, and blue"
    }
]

// Declaration button
const buttonEasyNext = document.getElementById('next-easy-question');
const buttonEasyPrev = document.getElementById('prev-easy-question');

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
var totalHint = 0;

// Declaration variable check easy question
const yes = document.getElementById('yes');
const no = document.getElementById('no');

// Function show easy question
function showEasyQuestion(currentQuestion) {
    var index = easyQuestions[currentQuestion];
    questionContent.textContent = index.question
}

// Display first easy question
showEasyQuestion(currentQuestion);

// Display next question
function showEasyNext() {
    currentQuestion += 1;
    if(currentQuestion == easyQuestions.length) {
        return false;
    }
    showEasyQuestion(currentQuestion);
    errorMessage.style.display = "none";
    hintMessage.style.display = "none";
    level(currentQuestion + 1);
    return currentQuestion;
}

// Display prev question
function showEasyPrev() {
    currentQuestion -= 1;
    showEasyQuestion(currentQuestion);
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

level(currentQuestion+1);

function check() {
    for(index = currentQuestion; index <= easyQuestions.length; index++) {
        if(event.srcElement.id == easyQuestions[index].answer && questionContent.textContent == easyQuestions[index].question) {
            hintMessage.style.display = "block";
            errorMessage.style.display = "none";
            currentQuestion += 1;
            index += 1;
            totalHint += 1;
            if(index == easyQuestions.length) {
                alert('Easy level completed');
            }
            showEasyQuestion(currentQuestion);
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
        alert(easyQuestions[currentQuestion].hintAnswer);
        totalHint -=1;
    }
    return totalHint, false;
}