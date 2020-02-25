
function setup() {
  createCanvas(400, 400,);
}

function draw() {
  background(0)
  fill(50); 
  
  color(random(255), random(255), random(255));
      fill(random(255), random(255), random(255))
  
  square(50,70,100); //big square for left eye
  square(250,70,100);// big square for right eye
  
  fill(0);
  square(100, 120, 50);// for the left eyes of creeper
  square(250,120, 50);// for the right eyes of creeper
  
  //pattern design of creeper face
  stroke(155,255,100)
  fill(155,255,100);
  square(150,120,50);
  
  stroke(20,100,20);
  fill(20,100,20);
  square(200,120,50);
  
  stroke(150);
  fill(150);
  square(150,70,50);
  
  stroke(0,140,20);
  fill(0,140,20);
  square(200,70,50);

  stroke(0,255,50);
  fill(0,255,50);
  rect(200,20,50,50);
  
  stroke(0,180,50);
  fill(0,180,50);
  square(50,20,50);
  
  stroke(0,20,10);
  fill(0,20,10);
  square(100,20,50)
  
  stroke(0,155,10);
  fill(0,155,10);
  square(150,20,50);
  
  stroke(0,100,10);
  fill(0,100,10);
  square(250,20,50);
  
  stroke(150);
  fill(150);
  square(300,20,50);
  
  stroke(0,255,0);
  fill(0,255,0);
  square(350,20,50);
  
  stroke(0,180,10);
  fill(0,180,10);
  rect(350,70,50,100);
  
  stroke(155);
  fill(155);
  square(250,170,50);
  
  stroke(0,100,10);
  fill(0,100,10);
  square(300,170,50);
  
  stroke(100,255,10);
  fill(100,255,10);
  square(350,170,50);
  
  stroke(0,200,20);
  fill(0,200,20);
  square(300,220,50);
  
  stroke(200);
  fill(200);
  square(350,220,50);
  
  stroke(0,90,50);
  fill(0,90,50);
  square(300,270,50);
  
  stroke(0,150,20);
  fill(0,150,20);
  square(350,270,50)
  
  stroke(0,220,60);
  fill(0,220,60);
  square(300,320,50);
  
  stroke(0,90,50);
  fill(0,90,50);
  square(350,320,50);
  
  stroke(0,255,80);
  fill(0,255,80);
  square(200,320,50);
  
  stroke(0,100,0);
  fill(0,100,0);
  square(150,320,50);
  
  stroke(155);
  fill(155);
  square(50,320,50);
  
  stroke(0,220,20);
  fill(0,220,20);
  square(0,320,50);
  
  stroke(0,150,0);
  fill(0,150,0);
  square(50,270,50);
  
  stroke(0,40,0);
  fill(0,40,0);
  square(0,270,50);
  
  stroke(0,40,0);
  fill(0,40,0);
  square(50,220,50);
  
  stroke(100,200,20);
  fill(100,200,20);
  square(0,220,50);
  
  stroke(0,150,0);
  fill(0,150,0);
  rect(0,115,50,105)
  
  stroke(0,225,0);
  fill(0,225,0);
  square(100,170,50);
  
  stroke(100,255,0);
  fill(100,255,0);
  square(50,170,50);
  
  stroke(0,50,0);
  fill(0,50,0);
  square(1.5,66.5,47.5)
  
  stroke(0,255,0);
  fill(0,255,0);
  square(0,20,50);
  
  // creeper mouth/nose
  
  fill(50);
  stroke(50);
  color(random(255), random(255), random(255));
      fill(random(255), random(255), random(255))
  
  rect(100,220, 200, 50);//shade mouth of the creeper
  rect(100,270, 49, 101);//shade mouth of the creeper
  rect(250,270, 49, 101);//shademouth of the creeper
  rect(150,270, 100, 50);// shade mouth of the creeper
  
  rect(150, 170, 100 ,50); // rect is the nose shading
  fill(0);
  stroke(0);
  rect(150,220,100,50);
  rect(100,270,200,50);
}