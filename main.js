function preload() {
    
}
function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(100,250);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#9BC1BC');
}
function modelLoaded() {
    console.log("poseNet has been initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}