// function runEvaluation(p, j, c) {
//   p = document.getElementById("python");
//   j = document.getElementById("javascript");
//   c = document.getElementById("c")
// }

function question1() {
  const nameArea = document.getElementById("namesection");
  const q1 = document.getElementById("q1div");
  q1.removeAttribute("class");
  nameArea.classList.add("hidden");
  console.log("start triggered");
}

function question2() {
  const q1 = document.getElementById("q1div");
  const q2 = document.getElementById("q2div");
  q1.classList.add("hidden");
  q2.removeAttribute("class");
  console.log("q1 button triggering");
}

function question3() {
  const q2 = document.getElementById("q2div");
  const q3 = document.getElementById("q3div");
  q2.classList.add("hidden");
  q3.removeAttribute("class");
  console.log("q2 button triggering");
}

function question4() {
  const q3 = document.getElementById("q3div");
  const q4 = document.getElementById("q4div");
  q3.classList.add("hidden");
  q4.removeAttribute("class");
  console.log("q3 button triggering");
}

function question5() {
  const q4 = document.getElementById("q4div");
  const q5 = document.getElementById("q5div");
  q4.classList.add("hidden");
  q5.removeAttribute("class");
  console.log("q4 button triggering");
}

function getAnswer() {
  const q5 = document.getElementById("q4div");
  const answer = document.getElementById("q5div");
  console.log("answer button triggering");
  q5.classList.add("hidden");
  answer.removeAttribute("class");
}

function resetPage() {
  document.getElementById("answersdiv").classList.add("hidden");
  document.getElementById("namesection").removeAttribute("class");
  console.log("answer button triggering");
}

window.addEventListener("load", function() {
  const startButton = document.getElementById("startbutton");
  const q1Button = document.getElementById("q1button");
  const q2Button = document.getElementById("q2button");
  const q3Button = document.getElementById("q3button");
  const q4Button = document.getElementById("q4button");
  const q5Button = document.getElementById("q5button");
  const reset = document.getElementById("reset");
  console.log("buttons set");
  const q1div = document.getElementById("divq1");
  const q2div = document.getElementById("divq2");
  const q3div = document.getElementById("divq3");
  const q4div = document.getElementById("divq4");
  const q5div = document.getElementById("divq5");
  const answersdiv = document.getElementById("answersdiv");
  console.log("divs set");

  startButton.addEventListener("click", question1);
  q1Button.addEventListener("click", question2);
  q2Button.addEventListener("click", question3);
  q3Button.addEventListener("click", question4);
  q4Button.addEventListener("click", question5);
  q5Button.addEventListener("click", getAnswer);
  reset.addEventListener("click", resetPage);
});

//input[name='((radio's name))']:checked