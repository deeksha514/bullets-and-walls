var bullet,bullet2,bullet3;
var speed,speed2,speed3;
var weight,weight2,weight3;
var thickness,thickness2,thickness3;
var wall,wall2,wall3;

function setup() {
 createCanvas(1600,400);

 bullet= createSprite(50, 120, 30, 10);
 bullet2=createSprite(50,200,30,10);
 bullet3=createSprite(50,280,30,10);

 thickness=random(22,63);
 thickness2=random(10,42);
 thickness3=random(65,100);

 wall=createSprite(1500,120,thickness,75);
 wall2=createSprite(1500,200,thickness,75);
 wall3=createSprite(1500,280,thickness,75);

 wall.shapecolor=color(80,80,80);
 wall2.shapeColor=color(80,80,80);
 wall3.shapeColor=color(80,80,80);

 speed=random(90,140);
 speed2=random(140,240);
 speed3=random(240,324);

 weight=random(30,52);
 weight2=random(52,80);
 weight3=random(80,100);

 bullet.velocityX=speed;
 bullet2.velocityX=speed2;
 bullet3.velocityX=speed3;

}


function draw() {
  background(0,0,0); 


   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;

     bullet.visible=false;
     
     var damage=speed*weight*speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }
   
     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
   
    }

    if(hasCollided2(bullet2,wall2)){
      bullet2.velocityX=0;

      bullet2.visible=false;

      var damage=speed2*weight2*speed2/(thickness2*thickness2*thickness2);
 
      if(damage>10){
        wall2.shapeColor=color(255,0,0);
      }
    
      if(damage<10){
        wall2.shapeColor=color(0,255,0);
      }
    
     }

     if(hasCollided3(bullet3,wall3)){
      bullet3.velocityX=0;

      bullet3.visible=false;

      var damage=speed3*weight3*speed3/(thickness3*thickness3*thickness3);
 
      if(damage>10){
        wall3.shapeColor=color(255,0,0);
      }
    
      if(damage<10){
        wall3.shapeColor=color(0,255,0);
      }
    
     }
  

  text("if the wall turns green then the damage is less than 10 ",80,25);
  text("if the wall turns red then the damage is greater than 10",80,50);

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }

    return false;

}

function hasCollided2(lbullet2,lwall2){

  bullet2RightEdge=lbullet2.x+lbullet2.width;
  wall2LeftEdge=lwall2.x;
  if(bullet2RightEdge>=wall2LeftEdge)
  {
    return true;
  }

    return false;

}

function hasCollided3(lbullet3,lwall3){

  bullet3RightEdge=lbullet3.x+bullet3.width;
  wall3LeftEdge=lwall3.x;
  if(bullet3RightEdge>=wall3LeftEdge)
  {
    return true;
  }

    return false;

}



