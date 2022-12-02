const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const state = {
    waiting: "waiting",
    desc: "desc",
    result: "result"
}

var currentQuestion = 0;
var points = 0;
var nbQuest = 0;

var json = data[urlParams.get('id')];

document.title = "Quiz - " + json.title;
loadQuestion();

function loadResponse(desc, state){
    if(state == "Vrai"){
        points = points + 1;
        document.getElementById("response").style.backgroundColor = "green"
    }else{
        document.getElementById("response").style.backgroundColor = "red"
    }
    document.getElementById("response-container").style.display = "block"
    document.getElementById("response").innerHTML = desc;
}

document.getElementById("response-container").addEventListener('click', function(){
    if(currentQuestion != json.questions.length - 1){
        currentQuestion = currentQuestion + 1;
        loadQuestion();
    }else{
        loadResult();
    }
})

function loadResult(){
    document.getElementById("question").style.display = "none";
    document.getElementById("response-container").style.display = "none"
    document.getElementById("result-container").style.display = "block";
    document.getElementById("title-result").innerHTML = points > nbQuest/2 ? "Bravo !" : "Insuffisant";
    document.getElementById("result").innerHTML = points + "/" + nbQuest;
}

function loadQuestion(){
    document.getElementById("result-container").style.display = "none"
    document.getElementById("response-container").style.display = "none"
    document.getElementById("question").innerHTML = json.questions[currentQuestion].question;
    var container = document.getElementById("grid-container");
    container.innerHTML = "";
    container.style.display = "grid";
    nbQuest = json.questions.length;
    for(i = 0; i < json.questions[currentQuestion].reponses.length; i++){
        const div = document.createElement("div");
        div.innerHTML = json.questions[currentQuestion].reponses[i].label;
        div.setAttribute("class", "grid-item");
        div.id = i;
        container.appendChild(div);

        div.addEventListener("click", function(){

            container.style.display = "none";
            loadResponse(json.questions[currentQuestion].description, json.questions[currentQuestion].reponses[div.id].etat);
        });
    }
}

