const directions = {
    right,
    left
}

let myDirection = directions.right;

function forward(){
    //document.getElementById("avatar").style.left++;
    let x = 0;
    x++;
    console.log(x);
}

body.addEventListener("keydown", (e) => {
    forward();
});

