/* Variable set questions and answers */
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
/* Timer settings */
var timeLeft = 120;
var timerEl= document.getElementById("timer");
var timerId;
var questionDivEl = document.getElementById("question-div");
var currentQuestionIndex = 0;
var currentQuestion;

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
    // check if user ran out of time
  if (timeLeft  <= 0) {
    endQuiz();
  }
}

function getQuestion(){
 
    // tbd
var questionEl = document.getElementById("question");
currentQuestion = questions[currentQuestionIndex];
questionEl.innerText = currentQuestion.question;

choicesEl.innerHTML = "";

for(var i = 0; i < currentQuestion.choices.length; i++){
    var answerChoice = currentQuestion.choices[i];
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", answerChoice);

    choiceButton.textContent = i + 1 + ". " + answerChoice;

    choicesEl.appendChild(choiceButton);

}

}
 var choicesEl = document.getElementById("choices-div");
choicesEl.onclick = choicesClick;

function choicesClick(event){
    var button = event.target;
    if(!button.matches(".choice")){
        return;
    }
    console.log("user choice = ", button.value);
    if(button.value !== questions[currentQuestionIndex].correctAnswer){
        timeLeft -= 25;
        if(timeLeft < 0){
            timeLeft = 0;
        }
        timerEl.textContent = timeLeft;
        alert("Wrong Answer! Press OK to contouie"); 
    }
    else{
        alert("Right Answer! Press OK to contouie");
    }
    currentQuestionIndex ++;

    if(timeLeft <= 0 || currentQuestionIndex === questions.length){
        endQuiz()
    } else {
        getQuestion(); 
    }
}
function endQuiz(){
    // tbd
    // stop timer
    clearInterval(timerId);
 
    // show end screen
    var endDivEl = document.getElementById('end-div');
    endDivEl.removeAttribute('class'); 
}
