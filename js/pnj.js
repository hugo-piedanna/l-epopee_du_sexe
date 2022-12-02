var posPnj = [1400,2150,3300,5500,7425,9900];
var pnjDone = [];

function openFen(x){
    console.log("%d", x);
    for(var i=0; i<posPnj.length; i++){if(posPnj[i]-35<(x) && posPnj[i]+35>(x)){
        if(pnjDone.indexOf(i)==-1){
            stopAnimation();
            window.open('./quizz.html?id='+i,'_blank').focus();
            pnjDone.push(i);
        }
    }
        
        
    }
    
}

