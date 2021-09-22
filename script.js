
var startQuiz = document.querySelector("#buttonstart").addEventListener("click", startQuiz);
var timerEl = document.querySelector("#count");
var questionEl = document.getElementById("questions");
var timeLeft = 75;


  
function startQuiz(){

//This is my timer
  var timeInterval = setInterval(function () {
    
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      
      timerEl.textContent = timeLeft;
      
      clearInterval(timeInterval);
     
      displayMessage("Time is Up!");
    }
  }, 1000);

//replacing the original html content with the first question
var question1 = "Which of these is a javascript file??";
  questionEl.textContent = question1; 

  

//var question2 = "This is Question 2 ?";
//questionEl.textContent = question2;
}     
