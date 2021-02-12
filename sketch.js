const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops
var man
 var maxDrops =[]
          
function preload(){
  
}

function setup(){
  createCanvas(500,700)  
  engine = Engine.create();
  world = engine.world;

 drops = new Drop(100,200,5)
 //man= new Man(140,200,500)
  maxDrops=100
 //for(var i=0;i<maxDrops;i++){
 // drops.push(new Drop(random(0,400),random(0,400)))
  

//}
}


function draw(){
  background(0)
  rectMode(CENTER)
   Engine.update(engine); 
 // man.display();
  drops.display();
 
  
}   
