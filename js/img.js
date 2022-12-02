var homme = document.getElementById("homme");
var femme = document.getElementById("femme");
var avatar = document.getElementById("avatar");
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
        avatar.style.backgroundImage='url("../images/persos/Homme/Walk.png") 0px 0px';
    }
    if(selectedCharac=="femme"){
        homme.src="./images/btn/btnFalseHomme.png";
        femme.src="./images/btn/btnActifHomme.png";
        avatar.style.backgroundImage='url("../images/persos/Fille/Walk.png") 0px 0px';
    }
    console.log(selectedCharac);
}