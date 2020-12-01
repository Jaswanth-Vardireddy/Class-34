const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;


var myEngine, myWorld;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ball, rope;


function setup()
{
canvas=createCanvas(1000,600);
myEngine= Engine.create();
myWorld= myEngine.world;

 ball= new Ball(250,250,80,80);
 ground = new Ground(200,550,1000,40);
 box1 = new Box(500,100,70,70);
 box2 = new Box(500,100,70,70);
 box3 = new Box(500,100,70,70);
 box4 = new Box(500,100,70,70);
 box5 = new Box(500,100,70,70);
 box6 = new Box(500,100,70,70);
 box7 = new Box(500,100,70,70);
 rope= new Rope(ball.body,{x:300,y:50});


}

function draw()
{
background("red")
Engine.update(myEngine);

ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
ball.display();
rope.display();


}

function mouseDragged()
{
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}