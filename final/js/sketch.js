import {
  laboratoryBackground,
  messyRoomBackground,
  messyRoomBackgrundWindow,
  messyRoomBackgroundDoor,
  hirerBackground,
  cityBackground,
  officeBackground,
  officewindow,
  officecamera,
  officeBoss,
  clubBackground,
  beamer,
  characterButton,
  characterButtonEffect,
  phoneButtonImage,
  phoneButtonImageEffect,
  phoneImage,
  phoneImageEffect,
  phoneBig,
  partnerFacetime,
  partnerVideo,
  clubBackgroundFriends,
  clubBackgroundDesk,
  smiley,
  phoneText,
  phoneTextEffect,
  friend,
  party,
  phoneBigclear,
  clubBackgroundPeople,
  hologram,
} from "./p5setup.js";
import {
  mentorSound1,
  mentorSound2,
  mentorSound3,
  mentorSound4,
  //mentorSound5,
  mentorSound6,
  mentorSound7,
  mentorSound8,
  mentorSound9,
  mentorSound10,
  mentorSound11,
  mentorSound12,
  mentorSound13,
  mentorSound14,
  mentorSound15,
  mentorSound16,
  mentorSound17,
  mentorSound18,
  mentorSound19,
  mentorSound20,
  mentorSound21,
  mentorSound22,
  mentorSound23,
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import TalkingHandler from "./talkingHandler.js";
import Paper from "./paper.js";
import CharacterOverview from "./characterOverview.js";

//Buttons
let start = new Start(562.5, 337.5, 185, 65);
let beamerButton = new Button(650, 205, 230, 370, "Teleporter");
let paper = new Paper();
let phone = new Button(797, 440, 75, 10, "Handy");
let phoneButton = new Button(1245, 630, 65, 100);
let character = new Button(20, 630, 100, 100);
let window1Button = new Button(140, 120, 248, 270, "Fenster");
let leaveScreen = new Button(305, 630, 700, 100);
let xCharacterButton = new Button(1000, 145, 25, 25);
let characterOverview = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton
);
let xPhoneButton = new Button(300, 200, 25, 25);
let doorButton = new Button(1140, 118, 160, 402, "Tür");
let bossButton = new Button(650, 285, 145, 240, "Chefin");
let window2Button = new Button(15, 80, 230, 530, "Fenster");
let cameraButton = new Button(300, 40, 75, 40, "Überwachungskamera");
let friendsButton = new Button(780, 230, 220, 320, "Freunde");
let monitoringDesk = new Button(1050, 320, 220, 280, "Mischpult");
let peopleButton = new Button(150, 200, 550, 400, "Menschen");
let happyButton = new Button(402, 315, 95, 95);
let surprisedButton = new Button(507, 315, 95, 95);
let neutralButton = new Button(611, 315, 95, 95);
let sadButton = new Button(715, 315, 95, 95);
let angryButton = new Button(819, 315, 95, 95);

let talkingHandler = new TalkingHandler(paper);

let i = 0;
let j = 0;
let s = 0;

function relode() {
  window.location.reload();
}

function sound() {
  if (s === 0 && talkingHandler.activeTalk === talkingHandler.mentorTalking1) {
    s++;
    mentorSound1.play();
  }

  if (s === 1 && talkingHandler.activeTalk === talkingHandler.mentorTalking2) {
    s++;
    mentorSound1.stop();
    mentorSound2.play();
  }
  if (s === 2 && talkingHandler.activeTalk === talkingHandler.mentorTalking3) {
    s++;
    mentorSound2.stop();
    mentorSound3.play();
  }
  if (s === 3 && talkingHandler.activeTalk === talkingHandler.mentorTalking4) {
    s++;
    mentorSound3.stop();
    mentorSound4.play();
  }
  // if (s === 3 && talkingHandler.activeTalk === talkingHandler.mentorTalking4) { //andere version von sound4
  //   s++;
  //   mentorSound3.stop();
  //   mentorSound5.play();
  // }
  if (s === 4 && talkingHandler.activeTalk === talkingHandler.mentorTalking5) {
    s++;
    mentorSound4.stop();
    mentorSound6.play();
  }
  if (s === 5 && talkingHandler.activeTalk === talkingHandler.mentorTalking6) {
    s++;
    mentorSound6.stop();
    mentorSound7.play();
  }
  if (s === 6 && talkingHandler.activeTalk === talkingHandler.mentorTalking7) {
    s++;
    mentorSound7.stop();
    mentorSound8.play();
  }
  if (s === 7 && talkingHandler.activeTalk === talkingHandler.mentorTalking8) {
    s++;
    mentorSound8.stop();
    mentorSound9.play();
  }
  if (s === 8 && talkingHandler.activeTalk === talkingHandler.mentorTalking9) {
    s++;
    mentorSound9.stop();
    mentorSound10.play();
  }
  if (s === 9 && talkingHandler.activeTalk === talkingHandler.mentorTalking10) {
    s++;
    mentorSound10.stop();
    mentorSound11.play();
  }
  if (s === 9 && talkingHandler.activeTalk === talkingHandler.mentorTalking11) {
    s++;
    mentorSound10.stop();
    mentorSound12.play();
  }
  if (
    s === 10 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking12
  ) {
    s++;
    mentorSound12.stop();
    mentorSound13.play();
  }
  if (
    s === 11 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking13
  ) {
    s++;
    mentorSound13.stop();
    mentorSound14.play();
  }
  if (
    s === 12 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking14
  ) {
    s++;
    mentorSound14.stop();
    mentorSound15.play();
  }
  if (
    s === 13 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking15
  ) {
    s++;
    mentorSound15.stop();
    mentorSound16.play();
  }
  if (
    s === 14 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking16
  ) {
    s++;
    mentorSound16.stop();
    mentorSound17.play();
  }
  if (
    s === 15 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking16_1
  ) {
    s++;
    mentorSound17.stop();
    mentorSound18.play();
  }
  if (
    s === 16 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking17
  ) {
    s++;
    mentorSound17.stop();
    mentorSound18.stop();
    mentorSound19.play();
  }

  //
  if (
    s === 17 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking18
  ) {
    s++;
    mentorSound19.stop();
    mentorSound20.play();
    s = 10;
  }
  if (
    s === 17 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking19
  ) {
    s++;
    mentorSound19.stop();
    mentorSound20.stop();
    mentorSound21.play();
  }
  if (
    s === 18 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking19_1
  ) {
    s++;
    mentorSound21.stop();
    mentorSound22.play();
  }
  if (
    s === 19 &&
    talkingHandler.activeTalk === talkingHandler.mentorTalking20
  ) {
    s++;
    mentorSound22.stop();
    mentorSound23.play();
  }
}

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
    if (phoneButton.triggert === false && character.triggert === false) {
      bossButton.mouseMoved();
      window2Button.mouseMoved();
      cameraButton.mouseMoved();
    }
    if (character.triggert === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggert === false) {
      character.mouseMoved();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty11) {
    if (character.triggert === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggert === false) {
      character.mouseMoved();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty12) {
    if (character.triggert === false && phoneButton.triggert === false) {
      friendsButton.mouseMoved();
      monitoringDesk.mouseMoved();
      peopleButton.mouseMoved();
    }
    if (character.triggert === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggert === false) {
      character.mouseMoved();
    }
  }
  if (character.triggert === true) {
    xCharacterButton.mouseMoved();
  }
  if (phoneButton.triggert === true) {
    xPhoneButton.mouseMoved();
  }
  if (
    window2Button.triggert === true ||
    cameraButton.triggert === true ||
    monitoringDesk.triggert === true ||
    peopleButton.triggert === true
  ) {
    leaveScreen.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.hologramEmotion1) {
    happyButton.mouseMoved();
    surprisedButton.mouseMoved();
    neutralButton.mouseMoved();
    sadButton.mouseMoved();
    angryButton.mouseMoved();
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
    if (phoneButton.triggert === false && character.triggert === false) {
      bossButton.mouseClicked();
      window2Button.mouseClicked();
      cameraButton.mouseClicked();
    }
    if (phoneButton.triggert === false) {
      character.mouseClicked();
    }
    if (character.triggert === false) {
      phoneButton.mouseClicked();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty11) {
    if (phoneButton.triggert === false) {
      character.mouseClicked();
    }
    if (character.triggert === false) {
      phoneButton.mouseClicked();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty12) {
    if (character.triggert === false && phoneButton.triggert === false) {
      friendsButton.mouseClicked();
      monitoringDesk.mouseClicked();
      peopleButton.mouseClicked();
    }
    if (phoneButton.triggert === false) {
      character.mouseClicked();
    }
    if (character.triggert === false) {
      phoneButton.mouseClicked();
    }
  }
  if (character.triggert === true) {
    xCharacterButton.mouseClicked();
  }
  if (phoneButton.triggert === true) {
    xPhoneButton.mouseClicked();
  }
  if (
    window2Button.triggert === true ||
    cameraButton.triggert === true ||
    monitoringDesk.triggert === true ||
    peopleButton.triggert === true
  ) {
    leaveScreen.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.hologramEmotion1) {
    happyButton.mouseClicked();
    surprisedButton.mouseClicked();
    neutralButton.mouseClicked();
    sadButton.mouseClicked();
    angryButton.mouseClicked();
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken untern im screen
  fill(30, 30, 30);
  rect(10, 610, 1310, 130);

  sound();

  //scene1
  if (start.start === false) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
  }

  switch (talkingHandler.activeTalk) {
    case talkingHandler.start:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      if (start.start === true) {
        talkingHandler.activeTalk = talkingHandler.mentorTalking1;
      }
      break;
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
    //window.location.reload();
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
    case talkingHandler.empty2:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      if (paper.ok === false) {
        paper.draw();
      } else {
        talkingHandler.activeTalk = talkingHandler.mentorTalking19_1;
      }
      break;
    case talkingHandler.mentorTalking19_1:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.empty3:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      beamerButton.display();
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
        image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
        talkingHandler.activeTalk = talkingHandler.hologram1; //hologramAnimation1
      } else {
        image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
        image(phoneImage, 800, 440, 70, 10);
      }
      break;
    //case talkingHandler.animation1:
    //a++
    //bilder einfügen (Hintergründe)
    //animation einfügen
    //if(a>=50){
    //takingHandler.aktiveTalk=takingHandler.hologram1;
    // }
    //break;
    case talkingHandler.hologram1:
      //a=0;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneImage, 800, 440, 70, 10);

      break;
    case talkingHandler.selfSpeeche1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneImage, 800, 440, 70, 10);
      break;
    case talkingHandler.empty5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);

      if (window1Button.effect === true) {
        image(messyRoomBackgrundWindow, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (doorButton.effect === true) {
        image(messyRoomBackgroundDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      doorButton.display();
      if (phone.triggert === false && doorButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche3;
      }
      if (phone.triggert === true && doorButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche4;
      }
      if (phone.triggert === false) {
        phone.display();
        image(phoneImage, 800, 440, 70, 10);
        if (phone.effect === true) {
          image(phoneImageEffect, 800, 440, 70, 10);
        }
      } else {
        image(phoneButtonImage, 1245, 630, 65, 100);
        if (phoneButton.effect === true) {
          image(phoneButtonImageEffect, 1243, 628, 69, 104);
        }
      }
      if (phoneButton.triggert === true) {
        image(phoneBig, 510, 30, 300, 570); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3)
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("09:00", 660, 200);
      }
      window1Button.display();
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        characterOverview.display();
        xCharacterButton.display();
        if (xCharacterButton.triggert === true) {
          character.triggert = false;
          xCharacterButton.triggert = false;
        }
      }
      if (window1Button.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche2;
      }

      break;
    case talkingHandler._selfSpeeche2:
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
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneImage, 800, 440, 70, 10);
      doorButton.triggert = false;
      break;
    case talkingHandler.selfSpeeche4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking3Decision1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
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
        characterOverview.display();
        xCharacterButton.display();
        if (xCharacterButton.triggert === true) {
          character.triggert = false;
          xCharacterButton.triggert = false;
        }
      }
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      if (phoneButton.triggert === true) {
        image(phoneBig, 510, 35, 300, 580); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3)
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("11:00", 660, 200);
      }
      if (bossButton.effect === true) {
        image(officeBoss, 15, 15, 1300, 600);
      }
      if (bossButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.bossTalking1;
      }
      bossButton.display();
      if (window2Button.effect === true) {
        image(officewindow, 15, 15, 1300, 600);
      }
      window2Button.display();
      if (window2Button.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche23;
      }
      if (cameraButton.effect === true) {
        image(officecamera, 15, 15, 1300, 600);
      }
      cameraButton.display();
      if (cameraButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche24;
      }
      break;
    case talkingHandler.selfSpeeche23:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.empty6;
        window2Button.triggert = false;
        leaveScreen.triggert = false;
      }
      break;
    case talkingHandler.selfSpeeche24:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.empty6;
        cameraButton.triggert = false;
        leaveScreen.triggert = false;
      }
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
    case talkingHandler.hologramEmotion1:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(hologram, 331, 159, 654, 292);
      image(smiley, 402, 315, 511, 96);
      if (happyButton.effect === true) {
        stroke(220, 220, 220);
        noFill();
        strokeWeight(2);
        ellipse(451, 363, 98, 98);
      }
      if (surprisedButton.effect === true) {
        stroke(220, 220, 220);
        noFill();
        strokeWeight(2);
        ellipse(555, 363, 98, 98);
      }
      if (neutralButton.effect === true) {
        stroke(220, 220, 220);
        noFill();
        strokeWeight(2);
        ellipse(659, 363, 98, 98);
      }
      if (sadButton.effect === true) {
        stroke(220, 220, 220);
        noFill();
        strokeWeight(2);
        ellipse(763, 363, 98, 98);
      }
      if (angryButton.effect === true) {
        stroke(220, 220, 220);
        noFill();
        strokeWeight(2);
        ellipse(865, 363, 98, 98);
      }
      if (happyButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (surprisedButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (neutralButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (sadButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (angryButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      break;
    case talkingHandler.hologram2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.message1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 35, 300, 580);
      talkingHandler.message1.display();
      break;
    case talkingHandler.talking2Decision4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 35, 300, 580);
      talkingHandler.message1.display();
      break;
    case talkingHandler.empty7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 35, 300, 580);

      noStroke();
      fill(220, 220, 220);
      textSize(17);
      text("*ring*", 1250, 250);
      doorButton.triggert = false;
      j++;
      if (j >= 20) {
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      break;
    case talkingHandler.selfSpeeche7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 35, 300, 580);
      break;
    case talkingHandler.talking2Decision5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.userTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.talking2Decision6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.empty8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
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
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
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
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.userTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      break;
    case talkingHandler.partnerTalking12:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 35, 300, 580);
      doorButton.triggert = false;
      break;
    case talkingHandler.empty10:
      j = 0;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.triggert === true) {
        image(phoneBig, 510, 35, 300, 580);
        fill(30, 30, 30);
        strokeWeight(3)
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("14:00", 660, 200);
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
        characterOverview.display();
        xCharacterButton.display();
        if (xCharacterButton.triggert === true) {
          character.triggert = false;
          xCharacterButton.triggert = false;
        }
      }
      break;
    case talkingHandler.workerTalking1:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking2:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking3:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking4:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking5:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking6:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking7:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking8:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision7:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking9:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking10:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.workerTalking11:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram3:
      image(hirerBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.empty11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        characterOverview.display();
        xCharacterButton.display();
        if (xCharacterButton.triggert === true) {
          character.triggert = false;
          xCharacterButton.triggert = false;
        }
      }
      image(phoneText, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneTextEffect, 1243, 628, 69, 104);
      }
      if (phoneButton.triggert === true) {
        image(phoneBig, 510, 35, 300, 580); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3)
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("17:00", 660, 200);

        image(phoneButtonImage, 470, 25, 360, 580); 
        talkingHandler.activeTalk = talkingHandler.friend1Talking1;
      }
      break;
    case talkingHandler.friend1Talking1:
      phoneButton.triggert = false;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 35, 300, 580);
      break;
    case talkingHandler.talking4Decision4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 35, 300, 580);
      break;
    case talkingHandler.friend1Talking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 35, 300, 580);
      break;
    case talkingHandler.friend1Talking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 35, 300, 580);
      break;
    case talkingHandler.friend1Talking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 35, 300, 580);
      j++;
      if (j >= 20) {
        talkingHandler.activeTalk = talkingHandler.fbi;
      }
      break;
    case talkingHandler.fbi:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      j++;
      if (j >= 50 && j <= 70) {
        noStroke();
        fill(220, 220, 220);
        text("*KNOCK*\n\n  *KNOCK*", 1250, 250);
      }
      if (j >= 70 && j <= 120) {
        noStroke();
        fill(220, 220, 220);
        textSize(70);
        textAlign(CENTER);
        text("FBI,\n OPEN UP!", 1130, 250);
      }
      if (j >= 120) {
        talkingHandler.activeTalk = talkingHandler.end;
      }
      break;
    case talkingHandler.selfSpeeche11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche12:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.empty12:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (friendsButton.effect === true) {
        image(clubBackgroundFriends, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (friendsButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.friend1Talking5;
      }
      friendsButton.display();
      if (monitoringDesk.effect === true) {
        image(clubBackgroundDesk, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (monitoringDesk.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche25;
      }
      monitoringDesk.display();
      if (peopleButton.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeeche26;
      }
      if (peopleButton.effect === true) {
        image(clubBackgroundPeople, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      peopleButton.display();
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggert === true) {
        characterOverview.display();
        xCharacterButton.display();
        if (xCharacterButton.triggert === true) {
          character.triggert = false;
          xCharacterButton.triggert = false;
        }
      }
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      if (phoneButton.triggert === true) {
        image(phoneBig, 510, 35, 300, 580); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3)
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("22:00", 660, 200);
      }
      break;
    case talkingHandler.selfSpeeche25:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.empty12;
        monitoringDesk.triggert = false;
        leaveScreen.triggert = false;
      }
      break;
    case talkingHandler.selfSpeeche26:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggert === true) {
        talkingHandler.activeTalk = talkingHandler.empty12;
        peopleButton.triggert = false;
        leaveScreen.triggert = false;
      }
      break;
    case talkingHandler.friend1Talking5:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend2Talking1:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend3Talking1:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend1Talking6:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend2Talking2:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend2Talking3:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend2Talking4:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision8:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend3Talking2:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend1Talking7:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend1Talking8:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.friend2Talking5:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche13:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche14:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche15:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.message2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche16:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche17:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche18:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche19:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 35, 300, 580);
      break;
    case talkingHandler.selfSpeeche20:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);

      break;
    case talkingHandler.selfSpeeche21:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeeche22:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.end:
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      textSize(100);
      textAlign(CENTER);
      fill(220, 220, 220);
      text("ENDE", 650, 300);
      relode();
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
