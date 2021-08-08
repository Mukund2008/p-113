function setup()
{
 canvas=createCanvas(600,480);
 canvas.position(400,175);
 video=createCapture(VIDEO);
 video.hide();
}

function draw()
{
 image(video,200,135,220,200);

 fill(0,128,0);
 stroke(0,128,0);
 rect(80,60,460,20);

 fill(0,128,0);
 stroke(0,128,0);
 rect(80,60,20,350);

 fill(0,128,0);
 stroke(0,128,0);
 rect(80,390,460,20);

 fill(0,128,0);
 stroke(0,128,0);
 rect(525,60,20,350);

 fill(255,0,0);
 stroke(255,0,0);
 circle(90,75,80,);

 fill(255,0,0);
 stroke(255,0,0);
 circle(90,390,80,);

 fill(255,0,0);
 stroke(255,0,0);
 circle(525,390,80,);

 fill(255,0,0);
 stroke(255,0,0);
 circle(525,70,80,);
}