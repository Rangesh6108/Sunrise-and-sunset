const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

var img;


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg)
        background(backgroundImg);
    

    // img=createSprite(200,200,10,10);


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 0 && hour > 12){
        time = "AM";
    }

    else{
        time = "PM";
    }

    textSize(35);
    textFont('Lucida Calligraphy')

    text("Time : " + hour + time,50,50);

    console.log(hour);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    var dateTime=responseJSON.datetime;

    // write code slice the datetime
    var hour=dateTime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    if(hour>=05 && hour<=06){
        bg = "Sun position Images/sunrise1.png";
    }

    else if(hour>=06 && hour<=07){
        bg = "Sun position Images/sunrise2.png";
    }

    else if(hour>=07 && hour<08){
        bg = "Sun position Images/sunrise3.png";
    }

    else if(hour>08 && hour<12){
        bg = "Sun position Images/sunrise4.png";
    }

    else if(hour>12 && hour<13){
        bg = "Sun position Images/sunrise5.png";
    }

    else if(hour>13 && hour<16){
        bg = "Sun position Images/sunrise6.png";
    }

    else if(hour>16 && hour<17){
        bg = "Sun position Images/sunset7.png";
    }

    else if(hour>17 && hour<18){
        bg = "Sun position Images/sunset8.png";
    }

    else if(hour>18 && hour<19){
        bg = "Sun position Images/sunset9.png";
    }

    else if(hour>19 && hour<20){
        bg = "Sun position Images/sunset10.png";
    }

    else if(hour>20 && hour<03){
        bg = "Sun position Images/sunset11.png";
    }

    else if(hour>03 && hour<04){
        bg = "Sun position Images/sunset10.png";
    }

    else if(hour>04 && hour<05){
        bg = "Sun position Images/sunset9.png";
    }

    console.log(hour);

    //load the image in backgroundImg variable here

    backgroundImg=loadImage(bg);

}

