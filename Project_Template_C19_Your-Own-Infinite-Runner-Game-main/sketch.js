var road,car1,car2,car3

function preload(){
roadImg = loadImage("road.png")
car1Img = loadImage("car1.png")
car2Img = loadImage("car2.png")
car3Img = loadImage("car3.png")
}

function setup() {
    createCanvas(300,600);
   

    road = createSprite(150,300)
    road.addImage("road",roadImg)
    road.velocityY=2


    car1 = createSprite(150,520,1,1)
    car1.addImage("car1", car1Img)
    car1.scale=0.3

    car2 = createSprite(90,100,1,1)
    car2.addImage("car2", car2Img)
    car2.scale=0.6
    car2.velocityY=2
 

    car3 = createSprite(210,100,1,1)
    car3.addImage("car3", car3Img)
    car3.scale = 0.38
    car3.velocityY=5
   

function draw() {
 drawSprites()
  text("Game Over", 300,300)
 
 if (keyDown("left" )){
    car1.x=car1.x-5
 }

 if (keyDown("right")){
    car1.x=car1.x+5
 }

 if (car1.x < 35) {
    car1.x=35
 }
if (car1.x > 265) {
    car1.x = 265
}

if (car2.y > 560) {
    car2.destroy
    car2.y = 100
    
}
if (car3.y > 560) {
    car3.destroy
    car3.y = 100
    
}
if (car2.isTouching(car1)) {
    gameState = END
   
}

if (car3.isTouching(car1)) {
    gameState = END
}

}
}

