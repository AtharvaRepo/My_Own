class Game{
    constructor(){

    }
    start(){
    thief = createSprite(displayWidth/2, displayHeight-200);
    thief.addImage(thiefImg);
    thief.scale=0.5;
    // thief.visible=false;

    helicopter = createSprite(displayWidth,30);
    helicopter.addImage(helicopterImg);
    helicopter.scale=0.8;
    helicopter.velocityX=-5;
    }
    play(){

        // background("black");
        // image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        // thief.visible=true;

        if(keyDown(LEFT_ARROW)){
            thief.velocityX=-5;
        }
        if(keyDown(RIGHT_ARROW)){
            thief.velocityX=+5;
        }
        if(keyDown(UP_ARROW)){
            thief.velocityY=-5;
        }
        if(keyDown(DOWN_ARROW)){
            thief.velocityY=+5;
        }
    }
    end(){

    }
}