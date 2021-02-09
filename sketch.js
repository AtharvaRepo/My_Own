var WELCOME=0;
var PLAY=1;
var END=2;
var score;
var gameState=WELCOME;
var welcome;
var thief, thiefImg;
var police, policeImg;
var helicopterImg, policeCarImg;
var helicopter;
var trackImg;


function preload(){
  trackImg = loadImage("Images/track.png");
  thiefImg = loadImage("Images/Thief_Walking.png");
  helicopterImg = loadImage("Images/Helicopter.png");
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);

  welcome = new Welcome(width/2,height/2, width,height);
  game = new Game();
  game.start();
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(gameState===WELCOME){
    welcome.display();
    if(keyDown("space")){
       gameState=PLAY;
    }
  }
 else if(gameState===PLAY){
     game.play();
  }
  else{

  }
  
 
}