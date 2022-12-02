const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var currentQuestion = 0;

var json = data[urlParams.get('id')];

document.title = "Quiz - " + json.title;
console.log(json.questions[currentQuestion].question)
document.getElementById("question").innerHTML = json.questions[currentQuestion].question;

