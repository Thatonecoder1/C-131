
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45,75);
    noFill();
    stroke("#00FF00");
    rect(30,60,450,350);
}


