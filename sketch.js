var bucket; 
var Background;
var Background2;
var bucket2;
var pool;

function setup() {
  createCanvas(1000, 1000);
  Background = createSprite(350, 240, displayWidth, displayHeight);
  Background.addImage(grassImage);
  //Background.x = Background.width/2;
  Background.scale = 3;

  pool = createSprite(500, 450, 1000, 1000);
  pool.addImage(poolImage);
  pool.scale = 3;

  /*bucket = createSprite(400, 450, 20, 20)
  bucket.addImage(bucketImage);
  bucket.scale = 0.2;
  bucket.depth = pool.depth + 1;
  

  bucket2 = createSprite(600, 450, 100, 100);
  bucket2.addImage(bucketImage2);
  bucket2.scale = 0.4;
  bucket2.depth = pool.depth + 1;
*/
  button = new Button(350, 450, 100, 100, bucketImage);
  button2 = new Button(550, 450, 100, 100, bucketImage2);

  }

function preload(){
  grassImage = loadImage("Images/grass.jpg");

  bucketImage = loadImage("Images/Bucket_1.png");
  bucketImage2 = loadImage("Images/Bucket_2.png")

  poolImage = loadImage("Images/pool.png")

  }

function draw() {

  drawSprites();

  strokeWeight(5)
  line(570, 500, 450, 500);
  
  button.display();
  button2.display();
}

class Button{
  constructor(x, y, width, height, img){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  over(){
    if(mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height){
      return true;
    }
    else{
      return false;
    }
  }

  display(){
    stroke(0)
    /*if(this.over()){
      tint(204, 0, 128);
    }
    else{
      noTint();
    }
*/
    image(this.img, this.x, this.y)
 }
}