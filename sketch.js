var player
var playerRightImage
var playerLeftImage
var playerJumpImage
var playerAttackImage
var backgroundImage
var ground
var groundImage
var obstacle
var laser
var obstacleGroup
var laserGroup
var gameState="start"
var distance=0
function preload(){
playerRightImage= loadAnimation("sprite1.png","sprite2.png","sprite3.png","sprite4.png","sprite5.png","sprite6.png","sprite7.png","sprite8.png")
playerLeftImage= loadAnimation("sprite1-left.png","sprite2-left.png","sprite3-left.png","sprite4-left.png")
playerJumpImage= loadAnimation("sprite9.png","sprite10.png","sprite11.png","sprite12.png","sprite13.png","sprite14.png","sprite15.png")
backgroundImage=loadImage("background.png")
groundImage= loadImage("ground1.png")
obstacleImage= loadImage("obstacle.png")
laserImage= loadImage("laser.png")
}


function setup() {
  createCanvas(1200,600);
  player= createSprite(200,200,50,50)
  player.addAnimation("running",playerRightImage)
  
  player.scale=1.5
  ground= createSprite(600,590,1220,20)
  obstacleGroup= new Group();
  laserGroup= new Group();
  

}

function draw() {
  background(backgroundImage);  
  player.collide(ground)

  
  if(gameState==="play"){
if(keyDown(RIGHT_ARROW)){
player.x= player.x +2
player.changeAnimation("running",playerRightImage)
  }
  if(keyDown(LEFT_ARROW)){
    player.x= player.x-2
    player.changeAnimation("running",playerLeftImage)
  }
  if(keyDown("space")){
    player.velocityY= -12
    player.changeAnimation("running",playerJumpImage)


  }
  player.velocityY= player.velocityY+0.8
  distance= distance+getFrameRate()/60
  text("Distance Traveled:",1160,10)
  spawnIceCubes();
  spawnLasers();
  if(player.isTouching(obstacleGroup)||player.isTouching(laserGroup)){
gameState="end"
 }

  }
  
  if(gameState==="end"){


  }
  
  

  drawSprites();
  
}
function spawnIceCubes(){
  if(frameCount%187===0){
     obstacle= createSprite(600,540,50,50)
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.6
    obstacleGroup.add(obstacle)

  }
  


}
function spawnLasers(){
if(frameCount%464===0){
   laser= createSprite(obstacle.x-60,470,50,50)
  laser.velocityX=-4
  laser.addImage(laserImage)
  laser.scale=0.5
  laserGroup.add(laser)

}

}

