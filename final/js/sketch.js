import { laboratoryBackground, beamer } from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import TalkingHandler from "./talkingHandler.js";

//Buttons
let start = new Start(562.5, 337.5, 185, 65);
let phoneButton = new Button(1200, 630, 80, 100);
let beamerButton = new Button(650, 210, 230, 370);

let talkingHandler = new TalkingHandler();

function mouseMoved() {
  if (start.start === false) {
    start.mouseMoved();
  }

  talkingHandler.mouseMoved();
}
window.mouseMoved = mouseMoved;

function mouseClicked() {
  if (start.start === false) {
    start.mouseClicked();
  }
  talkingHandler.mouseClicked();
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken untern im screen
  fill(30, 30, 30);
  rect(10, 610, 1310, 130);

  //Hintergründe
  //schwarzer Hintergrund
  if (
    start.start === false ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking1 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking2 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking3 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking4 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking5
  ) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
  } else {
    image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
  }
  if (talkingHandler.activeTalk === talkingHandler.mentorTalking7) {
    image(beamer, 639, 135, 240, 440);
  }

  //Button
  if (start.start === false) {
    start.display();
  } else {
    talkingHandler.display();
  }

  //Gegenstände
  if (beamerButton.effect === true) {
    image(beamer, 639, 135, 240, 440);
  }

  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(10);
  rect(10, 10, 1310, 610);
}

window.draw = draw;
