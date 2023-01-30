function assessResult(result){
  let p = 0;
  let j = 0;
  let c = 0;
  for(let i = 0; i < result.length; i++){
    if(result.slice(i, (i + 1)) === "p"){
    p += 1 ;
  } else if(result.slice(i, (i + 1) === "j")){
  } else if (result.slice(i, (i + 1) === "c")){
  }
}
  if(p > j && p > c){
    return "Python";
  } else if (j >= p && j >= c){
    return "Javascript";
  } else if (c > j && c > p){
    return "C#";
  }
}

function collectResult(){
  let results = "";
  let result1 = document.querySelector('input[name="q1radio"]:checked').value;
  let result2 = document.querySelector('input[name="q2radio"]:checked').value;
  let result3 = document.querySelector('input[name="q3radio"]:checked').value;
  let result4 = document.querySelector('input[name="q4radio"]:checked').value;
  let result5 = document.querySelector('input[name="q5radio"]:checked').value;
  results = (result1 + result2 + result3 + result4 + result5);
  return results;
}

function removeHidden(){
  let allHidden = document.querySelectorAll(".hidden");
  allHidden.forEach(element => {
    element.classList.remove("hidden");
  });
}

window.addEventListener("load", function(event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const startButton = document.getElementById("startbutton");
  const q5Button = document.getElementById("q5button");
  const reset = document.getElementById("reset");
  const answersdiv = document.getElementById("answersdiv");
  const answerSpan = document.getElementById("answer-place");
  const nameSpan = document.getElementById("name-place");
  console.log("divs set");
  startButton.addEventListener("click", removeHidden);
  q5Button.onclick = function(event){
    event.preventDefault();
    answersdiv.classList.remove("hidden-result");
    console.log(nameInput.value);
    console.log(assessResult(collectResult));
    nameSpan.innerText = nameInput.value;
    answerSpan.innerText = assessResult(collectResult());
  }
  reset.onclick = function(){
    location.reload()
  };
});