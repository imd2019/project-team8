import {
  laboratoryBackground,
  messyRoomBackground,
  cityBackground,
  beamer,
  characterButton,
  characterButtonEffect,
  phoneButtonImage,
  phoneButtonImageEffect,
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import TalkingHandler from "./talkingHandler.js";
import Paper from "./paper.js";
import CharacterOverview from "./characterOverview.js";

//Buttons
let start = new Start(562.5, 337.5, 185, 65);
let beamerButton = new Button(650, 210, 230, 370, "Maschine");
let paper = new Paper();
let phone = new Button(700, 400, 50, 50, "Handy");
let phoneButton = new Button(1245, 630, 65, 100);
let character = new Button(20, 630, 100, 100);
let windowButton = new Button(140, 120, 248, 270, "Fenster");
let leaveScreen = new Button(15, 415, 1300, 200, "Fenster verlassen");
let charakterOverview = new CharacterOverview(360, 150, paper);
let doorButton = new Button(100, 100, 100, "Tür");

let talkingHandler = new TalkingHandler(paper);

let i = 0;

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
  if (talkingHandler.activeTalk === talkingHandler.empty5) {
    if (windowButton.triggert === false) {
      if (character.triggert === false) {
        if (phone.triggert === false) {
          phone.mouseMoved();
        } else {
          phoneButton.mouseMoved();
        }
      }
      if (phoneButton.triggert === false) {
        character.mouseMoved();
      }
    }

    if (phoneButton.triggert === false && character.triggert === false) {
      windowButton.mouseMoved();
      if (windowButton.triggert === true) {
        leaveScreen.mouseMoved();
      }
    }
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
  if (talkingHandler.activeTalk === talkingHandler.empty5) {
    if (windowButton.triggert === false) {
      if (character.triggert === false) {
        if (phone.triggert === false) {
          phone.mouseClicked();
        } else {
          phoneButton.mouseClicked();
        }
      }
      if (phoneButton.triggert === false) {
        character.mouseClicked();
      }
    }

    if (phoneButton.triggert === false && character.triggert === false) {
      windowButton.mouseClicked();
      if (windowButton.triggert === true) {
        leaveScreen.mouseClicked();
      }
    }
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
    talkingHandler.activeTalk === talkingHandler.empty1
  ) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
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
    case talkingHandler.empty4:
      i++;
      if (i <= 10) {
        fill(220, 220, 220);
        rect(15, 15, 1300, 600);
      } else if (i >= 26) {
        talkingHandler.activeTalk = talkingHandler.hologram1;
      } else {
        image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      }
      break;
    case talkingHandler.hologram1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      break;
    case talkingHandler.selfSpeeche1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      break;
    case talkingHandler.empty5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      if (phone.triggert === false) {
        phone.display();
      } else {
        image(phoneButtonImage, 1245, 630, 65, 100);
        if (phoneButton.effect === true) {
          image(phoneButtonImageEffect, 1243, 628, 69, 104);
        }
      }
      if (phoneButton.triggert === true) {
        image(phoneButtonImage, 470, 25, 360, 580);
      }
      windowButton.display();
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        charakterOverview.display();
      }
      if (windowButton.triggert === true) {
        image(cityBackground, 15, 15, 1300, 600, 1, 0, 5421, 2519);
        leaveScreen.display();
        if (leaveScreen.triggert === true) {
          windowButton.triggert = false;
          leaveScreen.triggert = false;
        }
      }
      break;
  }
  if (start.start === false) {
    start.display();
  } else {
    talkingHandler.display();
  }

  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(10);
  rect(10, 10, 1310, 610);
}

window.draw = draw;
