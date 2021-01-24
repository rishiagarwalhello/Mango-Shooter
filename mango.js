class Mango
{
	constructor(x, y, r)
	{
		this.x=0;
		this.y=0;
		this.r=40;
		var mango_pro={restitution:0.66666, friction:0.66666, isStatic:true};
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(x, y, r, mango_pro);
		World.add(world, this.body);
	}

	display()
	{	
		imageMode(CENTER);
		image(this.image, this.body.position.x, this.body.position.y, 60, 60);
    }
}