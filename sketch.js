var canvas,surface,surface1,surface2,surface3,ball;
var music, edgeSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

   

    surface = createSprite(710,580,175,20);
    surface.shapeColor="red"

    surface1 = createSprite(510,580,180,20);
    surface1.shapeColor="yellow";

    surface2 = createSprite(310,580,180,20);
    surface2.shapeColor="orange";

    surface3 = createSprite(110,580,180,20);
    surface3.shapeColor="lime"



    //create box sprite and give velocity
    ball = createSprite(random(20,750),250,30,30);
    ball.velocity.y=4;
    ball.velocity.x=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edgeSprite= createEdgeSprites();
    


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(edgeSprite)){
        ball.bounceOff(edgeSprite);
    }

    if(surface.isTouching(ball)&&ball.bounceOff(surface)){
        ball.shapeColor="red";
    }

    if(surface1.isTouching(ball)&&ball.bounceOff(surface1)){
        ball.shapeColor="yellow";
        ball.velocityX=0
        ball.velocityY=0
        music.stop();
    }

    if(surface2.isTouching(ball)&&ball.bounceOff(surface2)){
        ball.shapeColor="orange";
        music.play();
    }

    if(surface3.isTouching(ball)&&ball.bounceOff(surface3)){
        ball.shapeColor="lime";
    }


    drawSprites();
}


