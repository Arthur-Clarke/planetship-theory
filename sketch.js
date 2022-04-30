var bg_img;
var nave, naveImg;
var solo;
var gravidade = 0.05;
var naveX = 0;
var naveY = 0;

function preload()
{
  bg_img = loadImage("images/bg.png");
  naveImg = loadImage("images/lander.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  solo = createSprite(500,690,1000,20);
  nave = createSprite(100,50,30,30);
  nave.addImage(naveImg);
  nave.scale = 0.1;
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  
  naveY +=gravidade;
  nave.position.y+=naveY;
  nave.position.x +=naveX;
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW) {
    naveUp();
  }
  if(keyCode == LEFT_ARROW){
    naveLeft();
  }
  if(keyCode == RIGHT_ARROW){
    naveRight();
  }
}


function naveUp()
{
  naveY = -1;
}

function naveRight()
{ 
  naveX += 0.2;
}

function naveLeft()
{
  naveX -= 0.2;
}
