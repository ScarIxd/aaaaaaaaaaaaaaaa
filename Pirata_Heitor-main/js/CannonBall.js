class CannonBall{
    constructor(x,y){
        var options = {
            isStatic: true
        };
        this.r = 30;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("./assets/cannonball.png")
        World.add(world,this.body);   
        this.tracer = []; 
    }

    shoot(){
        var newAngle = cannon.angle -28;
        newAngle *= (   3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body,0);
        Matter.Body.setVelocity(this.body,{x: velocity.x*(180/3.14),y: velocity.y*(180/3.14)});
    }

    remove(index){
        Matter.Body.setVelocity(this.body, {x:0,y:0});
        setTimeout(() =>{
            Matter.World.remove(world,this.body);
            delete balls[index];
        },600);
    }
    show(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
        if(this.body.velocity.x > 1 && pos.x > 170){
          var pos2 = [pos.x, pos.y]; 
            this.tracer.push(pos2);
        }
        for(var i = 0 ; i < this.tracer.length ; i += 1 ){
            image(this.image , this.tracer[i][0],this.tracer[i][1],5,5);
        }
    }




}


    