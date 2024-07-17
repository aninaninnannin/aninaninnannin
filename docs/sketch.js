let classifier;
let video;
let label = '';
let confidence = '';

function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5YdGByH_1/');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  classifier.classifyStart(video, gotResults);
}

function gotResults(results){
  label = results[0].label;
  confidence = results[0].confidence;
}

function draw() {
  background(220);
  image(video, 0, 0, width, height, 0, 0, video.width, video.height, COVER);
  strokeWeight(5);
  stroke(0);
  fill(255);
  textSize(100);
  textAlign(CENTER, CENTER);
  text(label, width/2, height/2);
  text(confidence, width/2, height/2.5);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}