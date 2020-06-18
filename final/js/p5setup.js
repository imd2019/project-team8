let sketch = new p5();
let width = windowWidth;
let height = windowHeight;
//Hintergünde
let laboratoryBackground;

function preload() {
  laboratoryBackground = loadImage("png/laboratory.png");
}
window.preload = preload;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);

export { laboratoryBackground };
