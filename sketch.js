const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(1800, 1000);

	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(950,100,800,100);

	bob1 = new Bob(750,800,50);
	bob2 = new Bob(850,800,50);
	bob3 = new Bob(950,800,50);
	bob4 = new Bob(1050,800,50);
	bob5 = new Bob(1150,800,50);

	rope1 = new Rope(bob1.body,{x: 750, y: 150});
	rope2 = new Rope(bob2.body,{x: 850, y: 150});
	rope3 = new Rope(bob3.body,{x: 950, y: 150});
	rope4 = new Rope(bob4.body,{x: 1050, y: 150});
	rope5 = new Rope(bob5.body,{x: 1150, y: 150});
	
	Engine.run(engine);
  
}

function draw() {
 
  background(255);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed(){

	if(keyCode === 38){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -600, y: -200});
	}
}
