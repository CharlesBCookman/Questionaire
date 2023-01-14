function question1() {
  const nameArea = document.getElementById("namesection");
  const q1 = document.getElementById("q1div");
  q1.removeAttribute("class");
  nameArea.classList.add("hidden");
  console.log("start triggered");
}

function question2() {
  document.getElementById("q1div").classList.add("hidden");
  document.getElementById("q2div").removeAttribute("class");
}

function question3() {
  document.getElementById("q2div").classList.add("hidden");
  document.getElementById("q3div").removeAttribute("class");
}

function question4() {
  document.getElementById("q3div").classList.add("hidden");
  document.getElementById("q4div").removeAttribute("class");
}

function question5() {
  document.getElementById("q4div").classList.add("hidden");
  document.getElementById("q5div").removeAttribute("class");
}

function getAnswer() {
  document.getElementById("q5div").classList.add("hidden");
  document.getElementById("answersdiv").removeAttribute("class");
}

function resetPage() {
  document.getElementById("answersdiv").classList.add("hidden");
  document.getElementById("namesection").removeAttribute("class");
}

window.addEventListener("load", function(event) {
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
})

//input[name='((radio's name))']:checked