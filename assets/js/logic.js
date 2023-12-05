
document.getElementById("start").addEventListener("click", startGame);

function getQuestion() {
   document.querySelector("#question-title").innerText = questionSet[0].title;
   
}

function startGame() {
    document.querySelector("#start-screen").setAttribute("class", "hide");
    document.querySelector("#questions").setAttribute("class", "start");
    getQuestion();
}

