class Stone
{
    constructor(x, y, r)
    {
        this.x=0;
        this.y=0;
        this.r=30;
        var stone_pro={restitution:0.666, friction:1, density:1.2};
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(x, y, r, stone_pro);
        World.add(world, this.body);
    }

    display()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*2, this.r*2);
    }
}