var sword,swordImage;
var gameOverImage;
var gameOver;

var alien1,alien1_image;
var alien2,alien2_image;


var fruit1_image,fruit2_image,fruit3_image,fruit4_image;
var fruit;
var fruit2;
var fruitGroup;
var fruitGroup2;
var monster;
var enemyGroup;

var score = 0;

var gameState = 1;
var END = 0;
var PLAY = 1;

// sound variable

var knifeSound;
var gameOverSound;


function preload(){
  swordImage = loadImage("sword.png");
  gameOverImage = loadAnimation("gameover.png");
  
  alien1_image = loadAnimation("alien1.png");
  alien2_image = loadAnimation("alien2.png");
  
  fruit1_image = loadImage("fruit1.png");
  fruit2_image = loadImage("fruit2.png");
  fruit3_image = loadImage("fruit3.png");
  fruit4_image = loadImage("fruit4.png");
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");

}
function setup(){
  createCanvas(400,400);
  sword = createSprite(40,200,20,20);
  sword.addImage("cut!",swordImage);
  sword.scale = 0.7;
  fruitGroup  = new Group();
  fruitGroup2 = new Group();
  enemyGroup  = new Group();
}

function draw(){
  background(rgb(125,125,255));
  textSize(20);
  text("score: "+score,300,50);
  sword.addAnimation("Ohh!",gameOverImage);
  
  
  if(gameState === PLAY){
    
  fruit1();
  fruits2();
  
  enemy();
  sword.y = World.mouseY;
  sword.x = World.mouseX;
    
    
  
  
  if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score++;
    knifeSound.play();
    
  }
    if(sword.isTouching(fruitGroup2)){
    fruitGroup2.destroyEach();
    score++;
    knifeSound.play();
      
  }
  
  if(sword.isTouching(enemyGroup)){
    gameState = END;
    gameOverSound.play();
    }
  }
  
  if(gameState === END){
     enemyGroup.destroyEach();
     fruitGroup.destroyEach();
    fruitGroup2.destroyEach();
     enemyGroup.setVelocityEach(0);
     fruitGroup.setVelocityEach(0);
     sword.changeAnimation("Ohh!",gameOver);
     sword.scale = 1.5;
     sword.x = 200;
     sword.y = 200;
  }
  
  
  drawSprites();
  
  
}

function fruit1(){
  var r = Math.round(random(1,4));
  
  if(frameCount % 30 === 0){
    
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    fruitGroup.add(fruit);
    
    
    
  
    if(r === 1){
    fruit.addImage(fruit1_image);
  }
  else if(r === 2){
    fruit.addImage(fruit2_image);
  }
  else if(r === 3){
    fruit.addImage(fruit3_image);
  }
  else{
    fruit.addImage(fruit4_image);
  }
  
  fruit.y = Math.round(random(50,340));
  fruit.velocityX = -(7+ score/4);
  fruit.setLifetime = 100;
  
  
    
  }
  
}


function fruits2(){
  var r = Math.round(random(1,4));
  
  if(frameCount % 50 === 0){
    
    
    fruit2 = createSprite(400,200,20,20);
    fruit2.scale = 0.2;
    fruitGroup2.add(fruit2);
    
    
  
    if(r === 1){
    fruit2.addImage(fruit1_image);
  }
  else if(r === 2){
    fruit2.addImage(fruit2_image);
  }
  else if(r === 3){
    fruit2.addImage(fruit3_image);
  }
  else{
    fruit2.addImage(fruit4_image);
  }
  
  
  fruit2.y = Math.round(random(50,340));
  fruit2.velocityX = -(7+ score/4);
  fruit2.setLifetime = 100;
  
  
    
  }
  
}


function enemy(){
  var x = Math.round(random(0,1));
  
  if(frameCount % 140 === 0){
    
    monster = createSprite(400,200,20,20);
    monster.y = Math.round(random(50,340));
    monster.velocityX = -(10+ score/7);
    monster.setLifetime = 10;
    enemyGroup.add(monster);
    
  
    if(x === 0){
    monster.addAnimation("Wooooooo",alien1_image);
  }
  else{
    monster.addAnimation("Raids",alien2_image);
  }
  
  
  
    
  
    
  }
  
  
}