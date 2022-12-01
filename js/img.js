var homme = document.getElementById("homme");
var femme = document.getElementById("femme");
var selectedCharac = null;

function choiceCharac(val) {
    if(val=="femme"){
        selectedCharac = "femme";
    }
    if(val=="homme"){
        selectedCharac ="homme";
    }
    if(selectedCharac=="homme"){
        homme.src="./images/btn/btnActifHomme.png";
        femme.src="./images/btn/btnFalseHomme.png";
    }
    if(selectedCharac=="femme"){
        homme.src="./images/btn/btnFalseHomme.png";
        femme.src="./images/btn/btnActifHomme.png";
    }
    console.log(selectedCharac);
}