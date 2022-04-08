
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
}

function draw() 
{
  background("green");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=5;
    background("blue");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x-=5;
    background("black");
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y-=5;
    background("red");
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y+=5;
    background("pink");
  }
  drawSprites();  
}











