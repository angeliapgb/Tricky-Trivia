const level1 = document.getElementById('level-1');
const level2 = document.getElementById('level-2');
const level3 = document.getElementById('level-3');
const level4 = document.getElementById('level-4');
const level5 = document.getElementById('level-5');

function unlocked() {
    currentQuestion = 2;
    showQuestion(currentQuestion);
    return currentQuestion;
}