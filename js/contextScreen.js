const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },1000);
})
 


const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 50){
        Headers.classList.add('active')
    }else{
        if(Headers.classList == null) return;
        Headers.classList.remove('active');
    }
}