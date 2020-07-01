import {
  laboratoryBackground,
  messyRoomBackground,
  cityBackground,
  officeBackground,
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
let window1Button = new Button(140, 120, 248, 270, "Fenster");
let leaveScreen = new Button(15, 415, 1300, 200, "Fenster verlassen");
let charakterOverview = new CharacterOverview(360, 150, paper);
let doorButton = new Button(1140, 120, 160, 400, "Tür");
let bossButton = new Button(700, 220, 120, 160, "Chefin");
let window2Button = new Button(20, 40, 300, 450, "Fenster");
let cameraButton = new Button(360, 40, 70, 40, "Überwachungskamera");

let talkingHandler = new TalkingHandler(paper);

let i = 0;
let j = 0;

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
  if (
    talkingHandler.activeTalk === talkingHandler.empty5 ||
    talkingHandler.activeTalk === talkingHandler.empty10
  ) {
    if (window1Button.triggert === false) {
      if (character.triggert === false) {
        if (phone.triggert === false) {
          phone.mouseMoved();
        } else {
          phoneButton.mouseMoved();
        }
        if (phoneButton.triggert === false) {
          doorButton.mouseMoved();
        }
      }
      if (phoneButton.triggert === false) {
        character.mouseMoved();
      }
    }

    if (phoneButton.triggert === false && character.triggert === false) {
      window1Button.mouseMoved();
    }
  }
  if (window1Button.triggert === true) {
    leaveScreen.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty6) {
    bossButton.mouseMoved();
    window2Button.mouseMoved();
    cameraButton.mouseMoved();
    phoneButton.mouseMoved();
    character.mouseMoved();
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
  if (
    talkingHandler.activeTalk === talkingHandler.empty5 ||
    talkingHandler.activeTalk === talkingHandler.empty10
  ) {
    if (window1Button.triggert === false) {
      if (character.triggert === false) {
        if (phone.triggert === false) {
          phone.mouseClicked();
        } else {
          phoneButton.mouseClicked();
        }
        if (phoneButton.triggert === false) {
          doorButton.mouseClicked();
        }
      }
      if (phoneButton.triggert === false) {
        character.mouseClicked();
      }
    }

    if (phoneButton.triggert === false && character.triggert === false) {
      window1Button.mouseClicked();
    }
  }
  if (window1Button.triggert === true) {
    leaveScreen.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty6) {
    bossButton.mouseClicked();
    window2Button.mouseClicked();
    cameraButton.mouseClicked();
    phoneButton.mouseClicked();
    character.mouseClicked();
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken untern im screen
  fill(30, 30, 30);
  rect(10, 610, 1310, 130);

  //scene1
  if (start.start === false) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
  }
  switch (talkingHandler.activeTalk) {
    case talkingHandler.mentorTalking1:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;
    case talkingHandler.mentorTalking2:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;
    case talkingHandler.mentorTalking3:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;
    case talkingHandler.mentorTalking4:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;
    case talkingHandler.mentorTalking5:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;
    case talkingHandler.empty1:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      break;

    case talkingHandler.mentorTalking6:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      // image(mentor, 560, 260, 118, 350);
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
    case talkingHandler.talking2Decision1:
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
    case talkingHandler.mentorTalking16_1:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking17:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.talking2Decision2:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking18:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking19:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.mentorTalking19_1:
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
        image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
        talkingHandler.activeTalk = talkingHandler.hologram1;
      } else {
        image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      }
      break;
    case talkingHandler.hologram1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      break;
    case talkingHandler.selfSpeeche1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      break;
    case talkingHandler.empty5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      doorButton.display();
      if (phone.triggert === false) {
        phone.display();
        //if (phone.effect===true){
        // image();
        // }
      } else {
        image(phoneButtonImage, 1245, 630, 65, 100);
        if (phoneButton.effect === true) {
          image(phoneButtonImageEffect, 1243, 628, 69, 104);
        }
      }
      if (phone.triggert === false && doorButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche3;
      }
      if (phone.triggert === true && doorButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche4;
      }
      if (phoneButton.triggert === true) {
        image(phoneButtonImage, 470, 25, 360, 580);
      }
      window1Button.display();
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        charakterOverview.display();
      }
      if (window1Button.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche2;
      }

      break;
    case talkingHandler.selfSpeeche2:
      image(cityBackground, 15, 15, 1300, 600, 1, 0, 5421, 2519);
      image(characterButton, 20, 630, 100, 100);
      if (phone.triggert === true) {
        image(phoneButtonImage, 1245, 630, 65, 100);
      }
      leaveScreen.display();
      if (leaveScreen.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.empty5;
        window1Button.triggert = false;
        leaveScreen.triggert = false;
      }
      break;
    case talkingHandler.selfSpeeche3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      doorButton.triggert = false;
      break;
    case talkingHandler.selfSpeeche4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking3Decision1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.empty6:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        charakterOverview.display();
      }
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      bossButton.display();
      if (bossButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.bossTalking1;
      }
      window2Button.display();
      cameraButton.display();
      break;
    case talkingHandler.bossTalking1:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking2:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking4Decision1:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking3:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking4:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking4Decision2:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking5:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking4Decision3:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking6:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking7:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking8:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking9:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche5:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision3:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking10:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking11:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking12:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking13:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking14:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking15:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.message1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.selfSpeeche6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      talkingHandler.message1.display();
      break;
    case talkingHandler.talking2Decision4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      talkingHandler.message1.display();
      break;
    case talkingHandler.empty7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      noStroke();
      fill(220, 220, 220);
      textSize(17);
      text("*ring*", 1250, 250);
      break;

    case talkingHandler.selfSpeeche7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.selfSpeeche8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.selfSpeeche9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.selfSpeeche10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.talking2Decision5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.userTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.talking2Decision6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.empty8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      noStroke();
      fill(220, 220, 220);
      textSize(17);
      text("*ring*", 1250, 250);
      j++;
      if (j >= 20) {
        talkingHandler.activeTalk = talkingHandler.userTalking2;
      }
      break;
    case talkingHandler.empty9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      noStroke();
      fill(220, 220, 220);
      textSize(17);
      text("*ring*", 1250, 250);
      j++;
      if (j >= 20) {
        talkingHandler.activeTalk = talkingHandler.userTalking3;
      }
      break;
    case talkingHandler.userTalking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.userTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      break;
    case talkingHandler.partnerTalking12:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneButtonImage, 470, 25, 360, 580);
      doorButton.triggert = false;
      break;
    case talkingHandler.empty10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.triggert === true) {
        image(phoneButtonImage, 470, 25, 360, 580);
      }
      doorButton.display();
      if (doorButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.workerTalking1;
      }
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        charakterOverview.display();
      }
      break;
    case talkingHandler.workerTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 1000, 400);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
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
