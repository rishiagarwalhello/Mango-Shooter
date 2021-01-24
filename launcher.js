class Launcher
{
    constructor(pointA, bodyB)
    {
        var launcher_pro={pointA: pointA, bodyB:bodyB, stiffness:0.006, length:35};
        this.body=Constraint.create(launcher_pro);
        this.pointA=pointA;
        World.add(world, this.body);
    }

    fly()
    {
        this.body.bodyB=null;
    }

    display()
    {
        if(this.body.bodyB)
        {
            strokeWeight(1.5);
            line(this.pointA.x, this.pointA.y, this.body.bodyB.position.x, this.body.bodyB.position.y);
        }
    }
}