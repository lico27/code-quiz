let startBtn = $("#start");
let qTitle = $("#question-title");
let startScreen = $("#start-screen");
let questions = $("#questions");
let qChoices = $("#choices");

startBtn.on("click", startGame);

function getQuestion() {
   qTitle.append(questionSet[0].title);
   qChoices.append(questionSet[0].answers);
   
}

function startGame() {
    console.log(qChoices);
    startScreen.addClass("hide");
    questions.addClass("start").removeClass("hide");
    getQuestion();
}

