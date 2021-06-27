const levelLock = document.getElementById('level-lock');
const levelImg = document.getElementById('level-img');
const levelText = document.getElementById('level-text');

// Redirect button easy
function easyPage() {
    location.href='easyQuestion.html';
}

// Redirect button hard
function hardPage() {
    location.href='hardQuestion.html';
}

function change() {
    levelImg.style.display = "none";
    levelText.style.display = "block";
    return false;
}

// alert(currentQuestion);