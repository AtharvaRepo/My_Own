class Welcome {
    constructor(x,y,width,height){
        this.welcomeScreen = createSprite(x,y,width,height);
        this.image=loadImage("Images/City.jpg");
        this.welcomeScreen.addImage("welcome message", this.image);
        this.welcomeScreen.scale = 1.2

        this.heading = createElement("h1");
    }
    display(){
        fill("White");
        // this.heading.html("Thief Escape");
        // this.heading.position(displayWidth/2-40,30);
        textSize(30);
        text("Thief Escape",displayWidth/2-40,30);

        fill("yellow");
        text("Press Space to play",displayWidth/2-50,displayHeight-200);
    }
}