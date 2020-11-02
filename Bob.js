class Bob {

    constructor(x,y,r){ 
          
     var options = {
      isStatic: false,
      restitution: 1.2,
      friction: 1.0,
      density: 0.8
     }
   
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Matter.Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);
     }
   
     display(){
    
     var paperpos = this.body.position;
     var angle = this.body.angle;
     
     push()
     translate(paperpos.x,paperpos.y);
     rotate(angle);
     ellipseMode(RADIUS)
     fill("#A9A9A9");
     ellipse(0,0,this.r,this.r);
     pop();
    }
   }