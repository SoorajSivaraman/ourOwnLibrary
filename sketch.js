var fixedRect, movingRect, dummy1, dummy2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  dummy1 = createSprite(100, 50, 20, 20);
  dummy1.shapeColor = "green";
  dummy2 = createSprite(150, 50, 20, 20);
  dummy2.shapeColor = "green";

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  dummy2.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect, fixedRect);
  if(isTouching(dummy1, dummy2)) 
  {
    dummy1.shapeColor = "red";
    dummy2.shapeColor = "red";
  }
  else
  {
    dummy1.shapeColor = "green";
    dummy2.shapeColor = "green";
  }
  drawSprites();
}
