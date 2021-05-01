class PlayerBullets{
    constructor(x,y){
        this.Bullets = createSprite(x,y,50,50);
        this.x = x;
        this.y = y;
        this.BulletsImg = loadImage("playerShoot.png");
    }
    show(){
        this.Bullets.addImage(this.BulletsImg);
        

    }
    speed()
    {
        this.Bullets.velocityY = 15;
    }
    shoot(){
        if(keyWentDown("space")){
            this.Bullets.velocityY = -15;
           
                                                                                                                                                 
        }
    }

}