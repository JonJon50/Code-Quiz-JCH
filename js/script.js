var questions = [
    {
        question: "What is NaN property in JavaScript?",
        choices: ["New an Name", "Norm and Nook", "Not a Number"],
        correctAnswer: "Not a Number", 
    },
    {
        question: "CSS was created to?",
        choices: ["Give website function", "Style Website", "Write text"],
        correctAnswer: "Style Website", 
    },
    {
        question: "What is HTML?",
        choices: ["Hypertext Markup Language", "High Made Learn", "Historic act Leaderboard"],
        correctAnswer: "Hypertext Markup Language", 
    },
    {
        question: "Which answer is a Pseudo-classes selector?",
        choices: [".div", "#class", ":visited",],
        correctAnswer: "visited", 
    },
    {
        question: "What does DOM mean in Javascript?",
        choices: ["Directly oi Movement", "Document Object Model", "Discovery Overlook Material", "choice4"],
        correctAnswer: "Document Object Model", 
    },
];
var timeLeft = 120;
var timerEl= document.getElementById("timer");
var timerId;
var questionDivEl = document.getElementById("question-div");
document.getElementById("start-button").addEventListener("click", startQuiz);
function startQuiz(){
    var startDivEl = document.getElementById("start-div");
    startDivEl.setAttribute("class", "hide");
    questionDivEl.removeAttribute("class");
    timerId = setInterval(timerFunc, 1000);
    timerEl.textContent = timeLeft;
    getQuestion();
}
function timerFunc(){
    timeLeft --;
    timerEl.textContent = timeLeft;
    // reminder to be completed
}
function getQuestion(){
    // tbd
}