class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.baseImg = loadImage("./assets/cannonBase.png");
    this.cannonImg = loadImage("./assets/cannon.png");
  }
  show(){
    if(keyIsDown(UP_ARROW)&& this.angle > -30){
      this.angle -= 1; 
    }
    if(keyIsDown(DOWN_ARROW)&& this.angle < 56){
      this.angle += 1; 
    }
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannonImg,0,0,this.width,this.height);
    pop();
    image(this.baseImg,70,115,200,100);
    
    console.log(this.angle)


  }
}
