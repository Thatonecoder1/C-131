img = "";
status="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecing Objects";
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45,75);
    noFill();
    stroke("#00FF00");
    rect(30,60,450,350);

     fill("#FF0000");
    text("Cat", 320,120);
    noFill();
    stroke("#00FF00");
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.dectect(img, gotResults);
}

function gotResults(error,results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

