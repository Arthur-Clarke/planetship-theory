var bg_img;


function preload()
{
  bg_img = loadImage("images/bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
 
  drawSprites();
}


