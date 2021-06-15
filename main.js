// function setMessage(formElement, type, message) {
//     const messageText = formElement.querySelector(".form-message");
//     messageText.textContent = message;
//     messageText.classList.remove("form-message-success", "form-message-error");
//     messageText.classList.add('form-message-${type}');
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const signupForm = document.querySelector("#signup");

//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();

//         setMessage(loginForm, "error", "Invalid username or password!");
//     });
// })

// question & answer
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
        hintAnswer: "Bundar"
    }, {
        question: "Hewan apa yang paling kurang ajar?",
        answer: "kutu rambut",
        hintAnswer: "Hitam kecil"
    }
]

const buttonCheck = document.getElementById('check');
const buttonNext = document.getElementById('next-question');
const buttonPrev = document.getElementById('prev-question');

const errorMessage = document.getElementById('error-message');
const hintMessage = document.getElementById('hint-message');

const hintButton = document.getElementById('hint');
const hintMsg = document.getElementById('hint-text');

// const buttonNextQuestion = document.getElementById('next');

var questionContent = document.getElementById('question');
var currentQuestion = 0;
var index = 0;

// hintButton.addEventListener('click', prevention());

// function prevention() {
//     return false;
// }

// buttonCheck.addEventListener('click', answerCheck);
// buttonNext.addEventListener('click', showQuestion(currentQuestion+1));
// buttonPrev.addEventListener('click', showQuestion(currentQuestion-1));

// buttonNextQuestion.addEventListener('click', showQuestion(currentQuestion+1));

function showNext() {
    showQuestion(currentQuestion + 1);
    return false;
}

function showPrev() {
    showQuestion(currentQuestion - 1);
    return false;
}

// Check answer
function answerCheck(e) {
    e.preventDefault();
    var input = document.forms["user-input"]["user-answer"].value;

    // buttonNext.addEventListener('click', showQuestion(currentQuestion+1));

    for(index = currentQuestion; index <= questionList.length + 1; index++) {
        
        // if(buttonNext.onclick == true) {
        //     showNext();
        // } else if(buttonPrev.onclick == true) {
        //     showQuestion(currentQuestion - 1)
        // }
        
        if(input == questionList[index].answer && questionContent.textContent == questionList[index].question) {
            document.getElementById('error-message').style.visibility = "hidden";
            hintMessage.style.display = "block";
            errorMessage.style.display = "none";
            hintMsg = questionList[index].hintAnswer;
            currentQuestion += 1;
            index += 1;
            if ( index == questionList.length) {
                alert('Easy level completed');
            }
            showQuestion(currentQuestion);
            level(currentQuestion+1);
            return;
        } else {
            hintMessage.style.display = "none";
            errorMessage.style.display = "block";
            return;
        }

        // if(buttonNext == true) {
        //     showQuestion(currentQuestion + 1);
        // } else {
        //     showQuestion(currentQuestion - 1);
        // }
    }
}

function prevNext() {
    for(index = currentQuestion; index <= questionList.length + 1; index++) {
        if(buttonNext == true) {
            showQuestion(currentQuestion + 1);
        } else {
            showQuestion(currentQuestion - 1);
        }
    }
}

// Show question
function showQuestion(indexQuestion) {
    var index = questionList[indexQuestion];

    questionContent.textContent = index.question; 
}

showQuestion(currentQuestion);


//level
function level (currentQuestion) {
    document.getElementById('level').innerHTML = 'Level ' + currentQuestion;
}

level(currentQuestion+1);


hintButton.addEventListener('click', hint(currentQuestion));
function hint (event, currentQuestion) {
    event.stopPropagation();
    hintMsg = hintAnswer[currentQuestion];
}

// document.getElementById('level').innerHTML = 'Level ' + (currentQuestion+1);

// const username  = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const signup = document.getElementById('signup');

// signup.addEventListener('click', checkInput);

// function checkInput() {
//     const usernameValue = username.value;
//     const emailValue = email.value;
//     const passwordValue = password.value;
    
// }