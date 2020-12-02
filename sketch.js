var helicopterIMG, helicopterSprite, packageSprite,packageIMG, box1, box2, box3;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
	 World.add(world, ground);
	 ground.velocityX=6;

	 box1 = new Box(300,610,10,50);
	 box2 = new Box(500,610,15,90);
	 box3 = new Horizontal(400,650,200,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  drawSprites();


  box1.display();
  box2.display();
  box3.display();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restituition : 0.3});
	World.add(world, packageBody);
}


}




