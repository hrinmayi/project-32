const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var shot1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b9,b10;
var polygon1;
var score=0;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
engine=Engine.create();
world = engine.world;

  b1=new Box(390,155,30,40);
  b2=new Box(330,235,30,40);
  b3=new Box(360,235,30,40);
  b4=new Box(390,235,30,40);
  b5=new Box(420,235,30,40);
  b6=new Box(450,235,30,40);
  b7=new Box(360,195,30,40);
  b8=new Box(390,195,30,40);
  b9=new Box(420,195,30,40);
  polygon1=new Polygon(50,200);
shot1=new Shot(polygon1.body,{x:100,y:200});
ground=new Ground(385,245,200,10);

}

function draw() {
  background(255);  
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  polygon1.display();
  shot1.display();
  ground.display();
  textSize(35);
  fill("black");
  text("score: "+ score,750,40);
  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b7.Score();
  b8.Score();
  b9.Score();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shot1.fly();
}
function keyPressed(){
  if(keyCode===32){
shot1.attach(polygon1.body);
  }
}

async function Time(){
  var time= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var timejson= await time.json();
  console.log(timejson);
  var dt= timejson.datetime;
  console.log(dt);
  var hours= dt.slice(11,13);
  console.log(hours);
  if(hours>=06 && hours<=12){
  bg=("red")
  }else{
      bg=(255)
  }
}