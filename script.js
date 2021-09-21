
var startQuiz = document.querySelector("#buttonstart");
var countEl = document.querySelector("#count");

var count = 76;


function setCounterText() {
  countEl.textContent = count;
}

startQuiz.addEventListener("click", function() {
 
  if (count > 0) {
    count--;
    setCounterText();

  }
});


