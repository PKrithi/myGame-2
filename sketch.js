var bg;
var rocket_img, rocket;
var enemyShip_img, enemyShip,enemyGroup;
var asteroid_img, asteroid, asteroidGroup;

function preload(){
  bg = loadImage("spaceBackground.jpeg")
  rocket_img = loadImage("rocket.png")
  enemyShip_img = loadImage("enemy.png")
  asteroid_img = loadImage("asteroid.png")
}

function setup() {
  createCanvas(600,690);
  
  rocket = createSprite(300,600,40,50)
  rocket.addImage("rocket",rocket_img)
  rocket.scale = 0.5;

  asteroidGroup = createGroup();
  enemyGroup = createGroup();
}

function draw() {
  image(bg,0,0,width,height) 

  rocket.x = mouseX

  if(keyDown("space")){
    shootAsteroid();
  }

  spawnEnemies();
  drawSprites();
}

function shootAsteroid(){
  asteroid = createSprite(150, 500, 50,20)
  asteroid.x = rocket.x
  asteroid.addImage(asteroid_img)
  asteroid.scale = 0.12
  asteroid.velocityY = -7
  asteroidGroup.add(asteroid)
}

function spawnEnemies(){
  if(frameCount % 50 == 0){
    enemyShip = createSprite(random(50,550),-50,40,50);
    enemyShip.addImage("enemy",enemyShip_img)
    enemyShip.scale = 0.3;
    enemyShip.velocityY = 3;
    enemyGroup.add(enemyShip)
  }
}
