class Boat{
    constructor(x,y,w,h,py,boatAnimation){

        this.animation = boatAnimation;
        this.speed = 0.05;
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.py = py;
        this.isBroken = false ;
       // this.image = loadImage("assets/boat.png");
        World.add(world,this.body);
    }

    animate(){
        this.speed +=0.05;
    }

    remove(index){

        this.animation = BrokenboatAnimation;
        this.speed = 0.05;
        this.w = 300;
        this.h = 300;
        this.isBroken = true

        setTimeout(() =>{
            Matter.World.remove(world,boats[index].body);
            delete boats[index];
        },500);
    }
    show(){
        var angle = this.body.angle;
        var pos = this.body.position;
        //
        var index = floor(this.speed % this.animation.length);
        //FONTE DO ERRO!!!
        //esse comando foi deslocado para o sketch linha 116, esqueci de pedir pra você apagar aqui;
        //Matter.Body.setVelocity(boat.body,{
         //   x:-2,
        //    y:0
        //  });

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index],0,this.py,this.w,this.h);
        pop();
    }
    

}