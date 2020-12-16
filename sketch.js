const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1,stone1,child1,tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy1;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1 = new ground(500,490,1000,20);

  boy1 = new boy(200,440,150,170);

  
  tree1 = new tree(850,290);
 
  stone1 = new stone(150,400,40);
  
  mango1 = new mango (810,150,50);
  mango2 = new mango (930,170,50);
  mango3 = new mango (870,230,50);
  mango4 = new mango (870,170,50);
  mango5 = new mango (750,250,50);
  mango6 = new mango (940,240,50);
  mango7 = new mango (790,200,50);

 
  slingshot1 =new slingshot(stone1.body,{x:150,y:400})

	Engine.run(engine);
  
}


function draw() {
 
  background("cyan");
  
  
  ground1.display();

  boy1.display();
  
  stone1.display();
  
  tree1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  slingshot1.display();

  textSize(25);
  strokeWeight(2);
  stroke("red");
  fill("lightgreen");
  text("Press space to get another chance!!", 230, 30);

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(stone1.body)
  }
}
 

function detectcollision(body1,body2){
  mangoBodyPosition=body2.body.position
  stoneBodyPosition=body1.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<body2.radius+body1.radius)
    {
      
  	  Matter.Body.setStatic(body2.body,false);
    }

  }