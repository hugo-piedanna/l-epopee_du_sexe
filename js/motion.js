const directions = {
    right: "right",
    left: "left"
}

var animationInterval;
var spriteSheet = document.getElementById("avatar");
var widthOfSpriteSheet = 1472;
var widthOfEachSprite = 184;
var myDirection = directions.right;
var isPush = false;


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
      //reset the position to show first sprite after the last one
    }, speed);
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
                }
                break;
            case "ArrowLeft":
            case "Q":
            case "q":
                if(myDirection != directions.left){
                    myDirection = directions.left;
                }
                break;
            default:
                return;
        }

        forward();
    }
});

