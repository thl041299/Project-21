var brImage, drImage, dedImage, gbImage, bImage;

function preload(){
brImage = loadAnimation("boyrunning1.png", "boyrunning2.png", "boyrunning3.png", "boyrunning4.png", "boyrunning5.png", "boyrunning6.png", "boyrunning7.png", "boyrunning8.png");

drImage = loadAnimation("dogrunning4.png", "dogrunning5.png", "dogrunning6.png", "dogrunning7.png", "dogrunning8.png", "dogrunning9.png", "dogrunning10.png", "dogrunning4.png", "dogrunning5.png", "dogrunning6.png", "dogrunningpt7.png", "dogrunningpt8.png", "dogrunningpt9.png", "dogrunningpt10.png", "dogrunningpt11.png", "dogrunningpt12.png", "dogrunningpt13.png");

dedImage = loadAnimation("dogrunningptpt1.png", "dogrunningptpt2.png", "dogrunningptpt3.png", "dogrunningptpt4.png", "dogrunningptpt5.png", "dogrunningptpt6.png");

gbImage = loadImage("greenbackground.png");

bImage = loadImage("bush.png");

leftEdge = createSprite(0, 200, 1, 400);
bottomEdge = createSprite(200, 400, 400, 1);
rightEdge = createSprite(400, 200, 1, 400);
topEdge = createSprite(200, 0, 400, 1);
}

function setup() {
br = createSprite(80, 220);
br.addAnimation("runningboy", brImage); 

dr = createSprite(300, 220);
dr.addAnimation("runningdog", drImage);

drd = createSprite(300, 220);
drd.addAnimation("deaddog", dedImage);
drd.visible = false;

gb = createSprite(200, 200);
gb.addImage("background", gbImage);
}

function draw() {

br.scale = 0.25;

dr.scale = 0.5;

gb.scale = 0.9;

drd.scale = 0.5;

gb.velocityX = -4.5;

createEdgeSprites();

br.collide(bottomEdge);
br.collide(leftEdge);
br.collide(topEdge);
br.collide(rightEdge);

if (gb.x < -20) {
 gb.x = width/2;
}

if (keyDown("w")) {
 br.y = br.y - 1;
}

if (keyDown("s")) {
 br.y = br.y + 1;
}

if (keyDown("d")) {
 br.x = br.x + 1;
}

if (keyDown("a")) {
 br.x = br.x - 1;
}

br.depth = gb.depth;
br.depth = gb.depth + 1;

dr.depth = gb.depth;
dr.depth = gb.depth + 1;

dr.depth = drd.depth;
drd.depth = drd.depth + 1;

if (br.isTouching(dr)) {
 textSize(30);
 text("WIN", 200, 200);

 br.destroy();
 dr.destroy();
 drd.destroy();
 gb.destroy();
} 

drawSprites(); 
}