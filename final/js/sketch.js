import { laboratoryBackground } from "./p5setup.js";

function draw() {
  clear();
  //Hintergründe
  image(laboratoryBackground, 0, 0, 1300, 600, 150, 0, 6500, 3000);

  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(2);
  rect(0, 0, 1300, 600);
}
window.draw = draw;
