var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
     music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(110,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5;
    ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(block1)
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.bounceOff(block2)
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        music.play();
        ball.bounceOff(block3)
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(block4)
    }

    drawSprites();
}
