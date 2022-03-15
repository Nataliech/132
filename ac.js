

img = "";

ac_image = "";

function preload(){
  ac_image = loadImage('ac.jpg');
}


function setup() {
    

  canvas = createCanvas(640, 420);
  canvas.position (315, 200);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){

    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(ac_image, gotResult);
}

function gotResult(error, results){

    if (error){

        console.log(error);

    }
    console.log(results);
}

function draw(){

    image(ac_image, 0, 0, 640, 420);
  
}
