const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,rope,ground;
var score=0
function preload() {
  
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600, 600, 1900, 20);
  ground1 = new Ground(800, 535, 20, 150);
  ground2 = new Ground(1200, 535, 20, 150);
  hero = new Hero(400,800,250);
  

}

function draw() {
  background("black");
  Engine.update(engine);
 ground1.display()
  ground.display();
  ground2.display()
 

  hero.display();

  

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  strokeWeight(3)
}


function mouseReleased(){

  hero.velocityX=5
}
function keyPressed(){
  if (keyCode === 32){
    Matter.body.applyForce(hero.body,hero.body.position,{x:85,y:-85})
  }}
