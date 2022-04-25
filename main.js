function preload(){

}
function setup(){
    canvas = createCanvas(395, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(395, 300)
    video.hide();

    PoseNET = ml5.poseNet(video, modelLoaded);
    function modelLoaded(){
        console.log("PoseNET Initialized!");
    }
    PoseNET.on('pose', gotPoses)
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            console.log("nose x =" + results[0].pose.nose.x);
            console.log("nose y =" + results[0].pose.nose.y);
        }
    }
}
function draw(){
 image(video, 0, 0, 395, 300)
}
function take_snapshot(){
    file = document.getElementById("file_name").value;
    save(file);
}