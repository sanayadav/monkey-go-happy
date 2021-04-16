 var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,370)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("run" , monkey_running);
  monkey.scale = 0.1 ;
  edges = createEdgeSprites();
  
  ground=createSprite(400,350,1500,10);
  ground.velocityX=-4;
  console.log(ground.x);
  
 
  
  

  
}


function draw() {
  background("lightblue");
  
  if(keyDown("space")&& monkey.y >= 300) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  if (ground.x < 0) {
  ground.x = ground.width /2;
}
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime , 100,50);
  
  monkey.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  drawSprites();

  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -6;

       obstacle.addImage(obstaceImage);
                        
    obstacle.scale = 0.09;
    obstacle.lifetime = 300;
   
   
 }
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
   banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.07  ;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
     monkey.depth = monkey.depth + 1;
    
  
      
  }
  
}







