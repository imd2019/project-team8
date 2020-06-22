import { laboratoryBackground, beamer } from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import TalkingHandler from "./talkingHandler.js";
import Paper from "./paper.js";

//Buttons
let start = new Start(562.5, 337.5, 185, 65);
let phoneButton = new Button(1200, 630, 80, 100);
let beamerButton = new Button(650, 210, 230, 370);

let talkingHandler = new TalkingHandler();

let paper = new Paper();

function keyPressed() {
  paper.keyPressed();
}
window.keyPressed = keyPressed;

function mouseMoved() {
  if (start.start === false) {
    start.mouseMoved();
  } else {
    talkingHandler.mouseMoved();
  }

  if (
    talkingHandler.activeTalk === talkingHandler.empty2 &&
    paper.ok === false &&
    paper.name.length >= 1
  ) {
    paper.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty3) {
    beamerButton.mouseMoved();
  }
}
window.mouseMoved = mouseMoved;

function mouseClicked() {
  if (start.start === false) {
    start.mouseClicked();
  } else {
    talkingHandler.mouseClicked();
  }

  if (
    talkingHandler.activeTalk === talkingHandler.empty2 &&
    paper.ok === false &&
    paper.name.length >= 1
  ) {
    paper.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty3) {
    beamerButton.mouseClicked();
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken untern im screen
  fill(30, 30, 30);
  rect(10, 610, 1310, 130);

  //scene1
  if (
    start.start === false ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking1 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking2 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking3 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking4 ||
    talkingHandler.activeTalk === talkingHandler.mentorTalking5 ||
    talkingHandler.activeTalk === talkingHandler.empty1 ||
    talkingHandler.activeTalk === talkingHandler.empty4
  ) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
    if (start.start === false) {
      start.display();
    } else {
      talkingHandler.display();
    }
  }
  switch (talkingHandler.activeTalk) {
    case talkingHandler.mentorTalking6:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking7:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      image(beamer, 639, 135, 240, 440);
      break;
    case talkingHandler.mentorTalking8:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking9:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.talkingDecision1:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking10:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking11:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking12:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking13:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking14:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking15:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking16:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking17:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.talkingDecision2:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking18:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking19:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.empty2:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      if (paper.ok === false) {
        paper.draw();
      } else if (talkingHandler.activeTalk === talkingHandler.empty2) {
        talkingHandler.activeTalk = talkingHandler.empty3;
      }
      break;
    case talkingHandler.empty3:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      if (beamerButton.effect === true) {
        image(beamer, 639, 135, 240, 440);
      }
      if (beamerButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.mentorTalking20;
      }
      break;
    case talkingHandler.mentorTalking20:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
  }

  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(10);
  rect(10, 10, 1310, 610);
}

window.draw = draw;
