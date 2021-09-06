function displayAnswer() {
  let answerAge = document.querySelector("answerAge");

  let apiName = `https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane`;

  console.log(apiName);
}

function displayAge() {
  let age = Math.floor(Math.random() * 100 + 1);
}

displayAnswer();
displayAge();
