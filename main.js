
function preload(){

}

function setup(){
    canvas = createCanvas(740,580);
    canvas.position(400,220);
    video = createCapture(VIDEO)
    video.hide();


}

function draw() {
    circle(370, 300, 600);
    image(video,150,150,440,300);
    
}
    

function take_snapshot(){
    save('Happy birthday.png');
}


