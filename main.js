function preload()
{

}
function setup()
{
video=createCapture(VIDEO);
video.size(550 , 450)

canvas=createCanvas(550 , 150)
poseNet=ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw()
{
    background('#969A97');
}
function modelLoaded()
{
    console.log("Model Is working but didnot fetch data properly")
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }

}
