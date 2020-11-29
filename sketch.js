var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var red1,red2,red3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	red1=createSprite(width/2,height-45,120,10);
	red2=createSprite(width/2-60,height-70,10,55);
	red3=createSprite(width/2+60,height-70,10,55);
	red1.shapeColor="red";
	red2.shapeColor="red";
	red3.shapeColor="red";
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	red1   = Bodies.rectangle(width/2,655,120,10, {isStatic:true} );
	red2   = Bodies.rectangle(width/2-60,630,10,55 , {isStatic:true} );
	red3   = Bodies.rectangle(width/2+60,630,10,55 , {isStatic:true} );
	World.add(world,red1);
	World.add(world,red2);
	World.add(world,red3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
    
  }
}



