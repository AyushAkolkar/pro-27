
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var groundObj;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bob
		bobObj1=new Bob(300,550,50,50);
		bobObj2=new Bob(350,550,50,50);
		bobObj3=new Bob(400,550,50,50);
		bobObj4=new Bob(450,550,50,50);
		bobObj5=new Bob(500,550,50,50);
	//Roof
		roof = new Roof(400,300,300,40);
	//rope
		rope1=new Rope(bobObj1.body,roof.body,-50*2,0);
		rope2= new Rope(bobObj2.body,roof.body,-25*2,0);
		rope3= new Rope(bobObj3.body,roof.body,-0*2,0);
		rope4= new Rope(bobObj4.body,roof.body,25*2,0);
		rope5= new Rope(bobObj5.body,roof.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //displaying the sprites
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	 Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-120,y:-120}); 
} 
