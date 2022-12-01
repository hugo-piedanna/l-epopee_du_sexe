const directions = {
    right: "right",
    left: "left"
}

let myDirection = directions.right;

function forward(){
    console.log("Current direction: " + myDirection)
}

function equalsIgnoringCase(text, other) {
    return text.localeCompare(other, undefined, { sensitivity: 'accent' }) === 0;
}

document.body.addEventListener("keydown", (e) => {
    switch(e.key){
        case "ArrowRight":
        case equalsIgnoringCase("d", "D"):
            if(myDirection != directions.right){
                myDirection = directions.right;
            }
            break;
        case "ArrowLeft":
        case equalsIgnoringCase("q", "Q"):
            if(myDirection != directions.left){
                myDirection = directions.left;
            }
            break;
        default:
            return;
    }

    forward();
});

