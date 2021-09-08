let askNname = [];

function displayAnswer() {
  let agePredicted = document.getElementById("demo");
  agePredicted.innerHTML = Math.floor(Math.random() * 100 + 1);
}

displayAnswer();
