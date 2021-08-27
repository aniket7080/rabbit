var garden,rabbit;
var gardenImg,rabbitImg;
var appple;
var grass;
var leaf;
var orangeLeaf;
//var redImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  grassImage = loadImage("grass.png")
  leafImage = loadImage("leaf.png")
  orangeLeafImage = loadImage("orangeLeaf.png")
 // redImage = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

 apple = createSprite(100,180,5,5)
 apple.addImage(appleImage)
 apple.scale = 0.1

 apple = createSprite(310,180,5,5)
 apple.addImage(appleImage)
 apple.scale = 0.1

 grass = createSprite(100,385,3,3)
 grass.addImage(grassImage)
 grass.scale = 0.1

 grass = createSprite(190,385,3,3)
 grass.addImage(grassImage)
 grass.scale = 0.1

 grass = createSprite(250,385,3,3)
 grass.addImage(grassImage)
 grass.scale = 0.1

 grass = createSprite(140,385,3,3)
 grass.addImage(grassImage)
 grass.scale = 0.1

 leaf = createSprite(300,69,3,3)
 leaf.addImage(leafImage)
 leaf.scale = 0.1
 //leaf.velocityY = 3

 orangeLeaf = createSprite(100,103,3,3)
 orangeLeaf.addImage(orangeLeafImage)
 orangeLeaf.scale = 0.1
 //orangeLeaf.velocityY = 4

// redImage = createSprite(100,85,3,3)
 //redImage.addImage(redImage)
// redImage.scale = 0.1
}


function draw() {
  background(0);

  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

 

  drawSprites();
}