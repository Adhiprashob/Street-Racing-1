
var backgroundImage;
var form;
var gameState;
var playerCount;
var car,car2,car3,car4;
var database;
var car1Img,car2Img,car3Img,car4Img;
var track;
var player;
var playerCount;



function preload(){


  backgroundImage = loadImage("./assets/background.png");

  

}



function setup() {
  canvas =  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
form = new Form();
form.display();






}


 

// board1 = new PlayerBase(width - 300, 500 , 170 , 200);
 // createSprite(400, 200, 50, 50);


function draw() {
  background(backgroundImage);  
 
}
