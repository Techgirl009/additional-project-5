var show_canvas = false;
function show(){
  //Inside this show() function write code to set "show_canvas" variable to true and call setup() function
  show_canvas = true;
  setup();
}
function setup() {
  //Check if "show_canvas" variable is true, if it is true then put the  code to create canvas and create webcam live video code inside this if block
  if(show_canvas == true){
    canvas =  createCanvas(600, 500);
	canvas.center();
    video = createCapture(VIDEO);
	video.hide();
     }
}

function draw(){
  if(show_canvas == true){
  image(video, 0, 0, width, height);
  }
}
