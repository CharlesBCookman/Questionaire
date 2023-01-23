// function runEvaluation(p, j, c) {
//   p = document.getElementById("python");
//   j = document.getElementById("javascript");
//   c = document.getElementById("c")
// }

function removeHidden(){
  let allHidden = document.querySelectorAll(".hidden");
  allHidden.classList.remove("hidden");
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
  const q5Button = document.getElementById("q5button");
  const reset = document.getElementById("reset");
  const q5div = document.getElementById("divq5");
  const answersdiv = document.getElementById("answersdiv");
  console.log("divs set");

  startButton.addEventListener("click", question1);
  reset.addEventListener("click", resetPage);
});

//input[name='((radio's name))']:checked