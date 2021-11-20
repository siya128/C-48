var player
var playerAnimation = []
var playerSpriteData,playerSpriteSheet
var i
var Img, bground,bground2
var x1 = 0; 
var x2
var scrollSpeed = 10
var Iground
var falling;

function preload(){
  playerSpriteData = loadJSON("Assets/Animations-Preview.json")
  falling = loadAnimation("falling animation/1.png","falling animation/2.png",
  "falling animation/3.png","falling animation/4.png","falling animation/5.png","falling animation/6.png"
  ,"falling animation/7.png","falling animation/8.png","falling animation/9.png","falling animation/10.png"
  ,"falling animation/11.png","falling animation/12.png","falling animation/13.png","falling animation/14.png"
  ,"falling animation/15.png","falling animation/16(end).png")
  bground = loadImage("Assets/Bground.jpg")
  bground2 = loadImage("Assets/Bground(2).jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
   player = createSprite(100,height/2+170,30,30)
   Iground = createSprite(width/2,height-25,width,20)
   Iground.visible = false
  player.addAnimation("fall",falling)
  x2 = width
}


function draw() {
  background("white")
  
    image(bground, x1, 0, width, height); 
  image(bground2, x2, 0, width, height);
   x1-=scrollSpeed; x2-=scrollSpeed;
    if(x1<= -width ){ x1 = width; } if(x2<=-width ){ x2=width; }
    if(keyDown("up")&&player.y >= height/2){
      player.velocityY = -10

    }
    player.velocityY = player.velocityY + 0.8
    
    player.collide(Iground)
  drawSprites()
  }
  
