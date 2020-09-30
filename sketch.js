//Create variables here
var database
var dog1Img,dog2Img
var dog
var foodS
function preload()
{
   dog1Img=loadImage("images/dogImg.png")
   dog2Img=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
 database=firebase.database ()
  dog=createSprite(250,300,150,150)
  dog.addImage(dog1Img)
  dog.scale=0.15
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background("white")
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.changeImage("abc",dog2Img)
}


  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val()

}
function writeStock(x){
  if(x<=0){
    x=0

  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
  
}




