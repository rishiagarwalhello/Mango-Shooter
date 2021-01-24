const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boy; //Boy
var tree; //Tree
var stone; //Stone
var ground; //Ground
var launcher; //Launcher
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10; //Mangoes

function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
}

function setup()
{
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2, height-5, width, 10);
	
	mango1=new Mango(1080, 70, 40);
	mango2=new Mango(1160, 140, 40);
	mango3=new Mango(1000, 100, 40);
	mango4=new Mango(1065, 160, 40);
	mango5=new Mango(1120, 210, 40);
	mango6=new Mango(1200, 215, 40);
	mango7=new Mango(950, 155, 40);
	mango8=new Mango(1000, 220, 40);
	mango9=new Mango(870, 200, 40);
	mango10=new Mango(930, 260, 40);

	stone=new Stone(190, 330, 30);

	launcher=new Launcher({x:190, y:330}, stone.body);

	Engine.run(engine);
}

function draw()
{
	background("lightblue");

	image(boy, 150, 250, 200, 300);
	image(tree, 775, 0, 500, 600)

	ground.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	stone.display();

	launcher.display();

	shooting(stone, mango1);
	shooting(stone, mango2);
	shooting(stone, mango3);
	shooting(stone, mango4);
	shooting(stone, mango5);
	shooting(stone, mango6);
	shooting(stone, mango7);
	shooting(stone, mango8);
	shooting(stone, mango9);
	shooting(stone, mango10);

	if(keyDown("space"))
	{
		Matter.Body.set(launcher.body, {bodyB:stone.body});
	}

	drawSprites();

	textSize(28);
	fill("red");
	strokeWeight(3);
	stroke("gold");
	text("Shoot and get the Mangoes, by dragging and releasing the Stone...🥭", 20, 40)
	text("Press Space Bar to get back the Stone...💎", 20, 80);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased()
{
	launcher.fly();
}

function shooting(stone_common, mango_common)
{
	var distance=dist(stone_common.body.position.x, stone_common.body.position.y, mango_common.body.position.x, mango_common.body.position.y);

	if(distance<=stone_common.r+mango_common.r)
	{
		Matter.Body.setStatic(mango_common.body, false);
	}
}