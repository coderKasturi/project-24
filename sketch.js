
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin1 = new Dustbin(500,600);
	dustbin2 = new Dustbin(1600,600);
	dustbin3 = new Dustbin(500,650,20,10);

    paper=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}

