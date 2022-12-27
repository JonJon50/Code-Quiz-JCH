var questions = [
    {
        question: "question1",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice2", 
    },
    {
        question: "question2",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice3", 
    },
    {
        question: "question3",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice2", 
    },
    {
        question: "question4",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice2", 
    },
    {
        question: "question5",
        choices: ["choice1", "choice2", "choice3", "choice4"],
        correctAnswer: "choice2", 
    },
];
var timeLeft = 120;
var timerEl= document.getElementById("timer");
var timerId;
var questionDivEl = document.getElementById("question-div");
document.getElementById("start-button").addEventListener("click", startQuiz);
function startQuiz(){
    var startDivEl=document.getElementById("start-div");
    startDivEl.setAttribute("class", "hide");
    questionDivEl.removeAttribute("class");
    timerId = setInterval(timerFunc, 1000);
    timerEl.textContent = timeLeft;
    getQuestion();
}
function timerFunc(){
    timeLeft--;
    timerEl.textContent = timeLeft;
    // reminder to be completed

}
function getQuestion(){
    // tbd
}