var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(60,110);
  weight = random(400,1600);
 
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white";
 car.velocityX = speed;

 wall = createSprite(1500, 170, 60, 200);
 wall.shapeColor = "white";

 wall.debug = true;
 car.debug = true;

}

function draw() {
  background("black");
  console.log(speed);

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor = "red";
  }
  if(deformation < 180 && deformation > 100){
    car.shapeColor = "yellow";    
  }
  if(deformation < 100){
    car.shapeColor = "green";   
  } 
}



  drawSprites();
}