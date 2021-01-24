class Ground
{
	constructor(x, y, w, h)
	{
		this.x=width/2;
		this.y=height-5;
		this.w=width;
		this.h=10
		var ground_pro={isStatic:true}
		this.body=Bodies.rectangle(x, y, w, h, ground_pro);
 		World.add(world, this.body);

	}
	display()
	{	
		push()
		rectMode(CENTER)
		fill("green")
		rect(this.body.position.x, this.body.position.y, this.w, this.h);
		pop()	
	}
}