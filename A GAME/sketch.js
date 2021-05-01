 

var player;
var playerImg;
var level = 1;
var enemy1;
var bosses;
var waves = 1;
var gameState = 0;
var bg;
var playerShoot;
var edges;
var enemy;



function preload(){
 playerImg = loadImage("player.png");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  enemy1 = new Enemy1(200,70,70);
  
  player = createSprite(width/2,height -50,70,70);
  player.addImage(playerImg);
  
 
}
function draw(){

  background(0);
  edges = createEdgeSprites();

  for(let i = 200; i < 500 ;i+70){
    console.log("hi");
    enemy = new Enemy1(i,70,10);
    enemy.show();
    
    

    
  }
  enemy1.show();
 
  if(keyDown("w")){
    player.velocityY = -10;
  }
  if(keyWentUp("w")){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    player.velocityY = 0;
  }
  if(keyDown("s")){
    player.velocityY = 10;
  }
  if(keyWentUp("s")){
    player.velocityY = 0;

  }
  if(keyWentDown("a")){
    player.velocityX = -10
  }
  if(keyWentUp("a")){
    player.velocityX = 0;

  }
  if(keyWentDown("d")){ 
    player.velocityX = 10;
    
  }
  if(keyWentUp("d")){
    player.velocityX = 0;
    
  }
   if(keyWentDown("space")){
     playerShoot = new PlayerBullets(player.x,player.y);
     playerShoot.shoot();
     playerShoot.show();


   }
   
  
  drawSprites();


}



