const directions = {
    right: "right",
    left: "left"
}

let myDirection = directions.right;

function forward(){
    //document.getElementById("avatar").style.left++;
    let x = 0;
    x++;
    console.log(x);
}

document.body.addEventListener("keydown", (e) => {
    forward();
});

