var posPnj = [500];

function openFen(x){
    console.log("%d", x);
    for(var i=0; i<posPnj.length; i++){
        if(posPnj[i]-10<(x) && posPnj[i]+10>(x)){
            window.open('./quizz.html?id='+i,'_blank').focus();
        }
    }
    
}

