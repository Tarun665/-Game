class Enemy1{
  constructor(y,w,h){
      this.enemy1 =  createSprite(50,y,w,h);
      this.w = w;
      this.h = h;
      this.enemy1Img = loadImage("enemy_npc.png");
      

  }
  show(){
    var bullets;
    this.enemy1.addImage(this.enemy1Img);
    this.enemy1.bounceOff(edges);
    var r = random(1,3);
    if(player.y == this.enemy1.y) {
      bullets =  new PlayerBullets(this.enemy1.x,this.enemy1.y);
      bullets.show();

      bullets.speed()
      console.log("test");
      
    }

  

   // if(player.x < width/2){             
      this.enemy1.velocityX = 10
      

    //}

  }
  speed(){
    this.enemy1.velocityX = 10

  }
}