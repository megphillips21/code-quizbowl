console.log("Hello");
var startBtn = document.querySelector("#start-btn");
var startScreen= document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");

var startGame = function(){
startScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");
}





startBtn.addEventListener("click", startGame)