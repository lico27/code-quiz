
document.getElementById("start").addEventListener("click", startGame);

function getQuestion() {
   document.getElementById("question-title").innerText = questionSet[0].title;
   document.getElementById("choices").innerText = questionSet[0].choices[0];
}

function startGame() {
    document.getElementById("start-screen").setAttribute("class", "hide");
    document.getElementById("questions").setAttribute("class", "start");
    getQuestion();
}

