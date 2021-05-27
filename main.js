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
        answer: "administrasi"
    }, {
        question: "Binatang apa yang seluruh anggota tubuhnya ada di kepala?",
        answer: "kutu rambut"
    }, {
        question: "Aku selalu ada di atas presiden dan menteri, tapi aku tidak punya jabatan apa pun dalam pemerintahan. Siapakah aku?",
        answer: "peci"
    }, {
        question: "Siapa yang selalu jadi korban pemerasan?",
        answer: "sapi perah"
    }, {
        question: "Hewan apa yang paling kurang ajar?",
        answer: "kutu rambut"
    }
]

const buttonCheck = document.getElementById('check');
const buttonNext = document.getElementById('next-question');
const buttonPrev = document.getElementById('prev-question');

const errorMessage = document.getElementById('error-message');
const hintMessage = document.getElementById('hint-message');

// const buttonNextQuestion = document.getElementById('next');

var questionContent = document.getElementById('question');
var currentQuestion = 0;
var index = 0;

buttonCheck.addEventListener('click', answerCheck);
// buttonNext.addEventListener('click', showQuestion(currentQuestion+1));
// buttonPrev.addEventListener('click', showQuestion(currentQuestion-1));


// buttonNextQuestion.addEventListener('click', showQuestion(currentQuestion+1));

function answerCheck(e) {
    e.preventDefault();
    var input = document.forms["user-input"]["user-answer"].value;

    for(index = currentQuestion; index <= questionList.length + 1; index++) {
        // document.getElementById('error-message').style.visibility = "hidden";
        if(input == questionList[index].answer && questionContent.textContent == questionList[index].question) {
            document.getElementById('error-message').style.visibility = "hidden";
            hintMessage.style.display = "block";
            errorMessage.style.visibility = "hidden";
            currentQuestion += 1;
            index += 1;
            if ( index == questionList.length) {
                alert('Easy level completed');
            }
            showQuestion(currentQuestion);
            return;
        } else {
            hintMessage.style.visibility = "hidden";
            errorMessage.style.display = "block";
            return;
        }
    }
}

function showQuestion(indexQuestion) {
    var index = questionList[indexQuestion];

    questionContent.textContent = index.question; 
}

showQuestion(currentQuestion);


//level
function level (currentQuestion) {
    document.getElementById('level').innerHTML = 'Level ' + currentQuestion;
}

level(currentQuestion+1); mh

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