class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity=255;
    }
  display(){
    if(this.body.speed<3){
      super.display()
    } else {
    push();
    strokeWeight(3);
    stroke("red");
    World.remove(world,this.body);
    this.Visiblity=this.Visiblity-5;
    tint(255,this.Visiblity);
    pop();

    }
  }
  Score(){
    if(this.Visiblity<0 && this.Visiblity>-1005){
    score++;
    
     }
     }
  };
  