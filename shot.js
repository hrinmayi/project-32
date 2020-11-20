class Shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
       
    }

    fly(){
        this.shot.bodyA = null;
    }

    display(){ 
       
        if(this.shot.bodyA){
            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
            push()
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            pop();
        }
    }
    
}