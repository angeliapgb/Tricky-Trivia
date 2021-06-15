const level1 = document.getElementById('level-1');
const level2 = document.getElementById('level-2');
const level3 = document.getElementById('level-3');
const level4 = document.getElementById('level-4');
const level5 = document.getElementById('level-5');

// function unlocked() {
//     currentQuestion = 2;
//     // showQuestion(currentQuestion);
//     // return currentQuestion;
//     // alert('aaaaaa');
//     return currentQuestion;
// }

// List questions
var questionList = [
    {
        question: "Ruangan apa yang paling ditakuti di rumah sakit?",
        answer: "administrasi",
        hintAnswer: "Tempat membayar"
    }, {
        question: "Binatang apa yang seluruh anggota tubuhnya ada di kepala?",
        answer: "kutu rambut",
        hintAnswer: "Hitam kecil"
    }, {
        question: "Aku selalu ada di atas presiden dan menteri, tapi aku tidak punya jabatan apa pun dalam pemerintahan. Siapakah aku?",
        answer: "peci",
        hintAnswer: "Bundar"
    }, {
        question: "Siapa yang selalu jadi korban pemerasan?",
        answer: "sapi perah",
        hintAnswer: "Licin"
    }, {
        question: "Hewan apa yang paling kurang ajar?",
        answer: "kutu rambut",
        hintAnswer: "Hitam kecil"
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
var totalHint = 0;

// Function show question
function showQuestion(indexQuestion) {
    var index = questionList[indexQuestion];
    questionContent.textContent = index.question;
}

// Display first question
showQuestion(currentQuestion);

// Display next question
function showNext() {
    currentQuestion += 1;
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
    return currentQuestion;
}

// Function show level
function level (currentLevel) {
    document.getElementById('level').innerHTML = 'Level ' + currentLevel;
}

level(currentQuestion+1);

// Function check answer
function answerCheck() {
    var input = document.forms["user-input"]["user-answer"].value;

    // alert('currentQuestion: ' + currentQuestion + ' index :' + index + ' totalHint: ' + totalHint);
    for(index = currentQuestion; index <= questionList.length + 1; index++) {
        if(input == questionList[index].answer && questionContent.textContent == questionList[index].question) {
            hintMessage.style.display = "block";
            errorMessage.style.display = "none";
            currentQuestion += 1;
            index += 1;
            totalHint += 1;
            if(index == questionList.length) {
                alert('Easy level completed');
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