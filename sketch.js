
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(100,100,80,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
/*
movingRect.width/2 + fixedRect.width/2 
= 80/2+ 50/2= 40 + 25 = 65
movinRect.x-fixedRect.x
*/
function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  
  if(movingRect.x-fixedRect.x < (movingRect.width/2 + fixedRect.width/2)  &&
  fixedRect.x-movingRect.x < (movingRect.width/2 + fixedRect.width/2) &&
  movingRect.y-fixedRect.y < (movingRect.height/2 + fixedRect.height/2)&&
  fixedRect.y- movingRect.y< (movingRect.height/2 + fixedRect.height/2)){
    fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }
  

  drawSprites();
}