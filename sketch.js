var bg_img;
var nave, naveImg, naveImgd;
var solo;
var gravidade = 0.05;
var naveX = 0;
var naveY = 0;
var landingZone,landingZoneImg;
var state = "waiting";
var obstacleInvisible1,obstacleInvisible2;

function preload()
{
  bg_img = loadImage("images/bg.png");
  naveImg = loadAnimation("images/lander.png");
  naveImgd = loadAnimation("images/crash1.png","images/crash2.png","images/crash3.png");
  naveImgd.looping = false;
  landingZoneImg = loadImage("images/lz.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  landingZone = createSprite(880,610,50,30);
  landingZone.addImage(landingZoneImg);
  landingZone.scale = 0.3;
  landingZone.setCollider("rectangle",0,200,400,100);
  solo = createSprite(500,690,1000,20);
  nave = createSprite(100,50,30,30);
  nave.addAnimation("landingMode", naveImg);
  nave.addAnimation("destroy", naveImgd);
  nave.scale = 0.1;
  nave.setCollider("rectangle",0,0,400,400);
  obstacleInvisible1 = createSprite(200, 500, 600,10);
  obstacleInvisible1.visible = false;
  obstacleInvisible2 = createSprite(350,580, 700,10);
  obstacleInvisible2.visible = false;
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  

  if(state == "waiting"){
    popUp("Começando o jogo", "a nave do OSWALDO foi danificada e precisara fazer um pouso forçado, vá para o ponto de pouso usando as setas do teclado para ganhar, com calma para não destruir a nave", "Clique aqui para iniciar", "playing");

  }
  else if(state == "playing"){
    if(nave.collide(landingZone)){
      popUp("Você venceu", "parabens por pousar a nave! OSWALDO está orgulhoso!", "clique aqui para reiniciar o jogo", "end")
      stop();
    }
    naveY +=gravidade;
    nave.position.y +=naveY;
    nave.position.x +=naveX;

    if(nave.collide(obstacleInvisible1)||nave.collide(obstacleInvisible2)||nave.collide(solo)) {
      nave.changeAnimation("destroy");
      popUp("Você perdeu", "parabens por não pousar a nave! OSWALDO não está orgulhoso!", "clique aqui para reiniciar o jogo", "end")
    }
  } else if(state == "end"){
    document.location.reload();
  }


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
function stop()
{
  naveX = 0;
  naveY = 0;
}

function popUp(title, description, textButton, newState){
  console.log(newState);
  // modal ou popup
  swal({
    title: title,
    text: description,
    confirmButtonText: textButton
  }, (isConfirm) => {
    if(isConfirm) {
      state = newState;
    }
  });
}

