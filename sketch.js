var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(80,80,80,80)
  movingRect = createSprite(90,90,90,90)

  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
}

function draw() {
  background(0);  
  drawSprites();

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

console.log(movingRect.x)

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.x-movingRect.x<fixedRect.height/2+movingRect.height/2){

    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red" 
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
}