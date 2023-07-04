
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p1, p2, p3, p4, p5, b1, b2, ground; 

function preload()
{
	
}

function setup() {
	createCanvas(550,600);


	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	}
	ground = Bodies.rectangle(600, height, 1200, 20, ground_options); 
	World.add(world, ground); 
	b1 = Bodies.rectangle(100,400,150, 20, ground_options); 
	World.add(world, b1); 
	b2 = Bodies.rectangle(400,400,150, 20, ground_options); 
	World.add(world, b2); 


	var p_options = {
		restitution: 0.04,
		friction: 0.02
	}
	p1 = Bodies.circle(220,10,10,p_options);
	World.add(world, p1);
	p2 = Bodies.circle(225,10,10,p_options);
	World.add(world, p2);
	p3 = Bodies.circle(230,10,10,p_options);
	World.add(world, p3);
	p4 = Bodies.circle(235,10,10,p_options);
	World.add(world, p4);
	p5 = Bodies.circle(240,10,10,p_options);
	World.add(world, p5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);

	rect(ground.position.x, ground.position.y, 1200,20);
	rect(b1.position.x, b1.position.y, 150,20);
	rect(b2.position.x, b2.position.y, 150,20);

	ellipse(p1.position.x, p1.position.y, 10);
	ellipse(p2.position.x, p2.position.y, 10);
	ellipse(p3.position.x, p3.position.y, 10);
	ellipse(p4.position.x, p4.position.y, 10);
	ellipse(p5.position.x, p5.position.y, 10);
 
  drawSprites();
}



