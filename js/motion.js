const directions = {
    right: 1,
    left: -1
}

var animationInterval;
var spriteSheet = document.getElementById("avatar");
var widthOfSpriteSheet = 1440;
var widthOfEachSprite = 1728/6;
var myDirection = directions.right;
var isPush = false;

const SPEED = 60;
var positionX = spriteSheet.offsetLeft;

function stopAnimation() {
    clearInterval(animationInterval);
}

function forward() {
    var position = widthOfEachSprite; //start position for the image
    const speed = 100; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites
  
    animationInterval = setInterval(() => {
      spriteSheet.style.backgroundPosition = `-${position}px 0px`;
      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      avance();
      //reset the position to show first sprite after the last one
    }, speed);
  }

function avance(){
    positionX = positionX + (myDirection * SPEED);
    if(positionX <= 0){
        positionX = 10;
    }
    if(positionX >= 11400){ 
        positionX = 11300;
    }
    spriteSheet.style.marginLeft = positionX + 'px';
    openFen(spriteSheet.offsetLeft);
}

document.body.addEventListener('keyup', (e) => {
    stopAnimation();
    isPush = false;
});

document.body.addEventListener("keydown", (e) => {
    if(!isPush){
        isPush = true;
        switch(e.key){
            case "ArrowRight":
            case "D":
            case "d":
                if(myDirection != directions.right){
                    myDirection = directions.right;
                    spriteSheet.setAttribute("style", "transform: scaleX(1)");   
                    spriteSheet.style.marginLeft = positionX + 'px';
                }
                break;
            case "ArrowLeft":
            case "Q":
            case "q":
                if(myDirection != directions.left){
                    myDirection = directions.left;
                    spriteSheet.setAttribute("style", "transform: scaleX(-1)");
                    spriteSheet.style.marginLeft = positionX + 'px';
                }
                break;
            default:
                return;
        }
        

        forward();
    }
});

