
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;



function preload()
{
	
}

function setup() {
	canves = createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	pendulumDiameter=40;

	startpendulumPositionX=width/2;
	startpendulumPositionY=height/4+500;
	pendulumObject1=new Pendulum(startpendulumPositionX-pendulumDiameter*2,startpendulumPositionY,pendulumDiameter);
	pendulumObject2=new Pendulum(startpendulumPositionX-pendulumDiameter,startpendulumPositionY,pendulumDiameter);
	pendulumObject3=new Pendulum(startpendulumPositionX,startpendulumPositionY,pendulumDiameter);
	pendulumObject4=new Pendulum(startpendulumPositionX+pendulumDiameter,startpendulumPositionY,pendulumDiameter);
	pendulumObject5=new Pendulum(startpendulumPositionX+pendulumDiameter*2,startpendulumPositionY,pendulumDiameter);

	sling1=new Sling(pendulumObject1.body,pendulumObject1.body-200,-pendulumDiameter*2, 0)
	sling2=new Sling(pendulumObject2.body,pendulumObject2.body-200,-pendulumDiameter*1, 0)
	sling3=new Sling(pendulumObject3.body,pendulumObject3.body-200,0, 0)
	sling4=new Sling(pendulumObject4.body,pendulumObject4.body-200,pendulumDiameter*1, 0)
	sling5=new Sling(pendulumObject5.body,pendulumObject5.body-200,pendulumDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	pendulumObject1.display();
	pendulumObject2.display();
	pendulumObject3.display();
	pendulumObject4.display();
	pendulumObject5.display();
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();

	Engine.update(engine);

	drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(pendulumObject1.body,{x:mouseX, y:mouseY});
}