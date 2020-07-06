//Import Hinterrgünde & Gegenstände
import {
  laboratoryBackground,
  messyRoomBackground,
  messyRoomBackgroundWindow,
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
  evaluationSmiley,
  vibration,
  newDoor,
} from "./p5setup.js";
// Import Sounddateien
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
  music1,
  music2,
  music3,
  music4,
  music5,
  soundEffekt1,
  soundEffekt2,
  soundEffekt3,
  soundEffekt4,
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import End from "./end.js";
import TalkingHandler from "./talkingHandler.js";
import Paper from "./paper.js";
import CharacterOverview from "./characterOverview.js";
import Credits from "./credits.js";

//Buttons
let start = new Start(562.5, 450, 185, 65);
let end = new End(562.5, 637.5, 185, 65);
let beamerButton = new Button(650, 205, 230, 370, "Teleporter");
let paper = new Paper();
let phone = new Button(797, 440, 75, 10, "Handy");
let phoneButton = new Button(1245, 630, 65, 100);
let character = new Button(20, 630, 100, 100);
let window1Button = new Button(140, 120, 248, 270, "Fenster");
let leaveScreen = new Button(305, 630, 700, 100);
let xCharacterButton = new Button(958, 160, 25, 25);
let characterOverview1 = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton,
  "Fahre zum Bewebungsgespräch."
);
let characterOverview2 = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton,
  "Möchtest du deine ID preisgeben, um den Job zu bekommen?"
);
let characterOverview3 = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton,
  "Vertraust du deiner Freundin?"
);
let characterOverview4 = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton,
  "Trinkst du Shots mit deinen Freunden?"
);
let characterOverview5 = new CharacterOverview(
  360,
  150,
  paper,
  xCharacterButton,
  "Entscheide dich, ob du Teil dieser Welt werden möchtest."
);
let xPhoneButton = new Button(777, 30, 25, 25);
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
let evaluationButton = new Button(335, 160, 650, 290);
let swichScreen = new Button(305, 630, 700, 100);

let talkingHandler = new TalkingHandler(paper);

let bikeButton = new Button(305, 630, 220, 100);
let carButton = new Button(545, 630, 220, 100);
let trainButton = new Button(785, 630, 220, 100);
let decision1 = new Button(305, 630, 340, 100);
let decision2 = new Button(665, 630, 340, 100);
let partyButton = new Button(140, 630, 540, 50);

let i = 0;
let j = 0;
let s = 0;
let e = 0;
let m = 0;
let c = 0;
let a = 0;
let v = 0;

let surveilScore = 0;
let happy = 0;
let surprised = 0;
let neutral = 0;
let sad = 0;
let angry = 0;
let securityDoor = false;

//Abspann
let credits = new Credits(650, 600);

function relode() {
  window.location.reload();
}

function sound() {
  //Effekte
  //wusch
  if (a === 0 && talkingHandler.activeTalk === talkingHandler.empty4) {
    a++;
    soundEffekt1.play();
    mentorSound23.stop();
  }
  if (a === 1 && talkingHandler.activeTalk === talkingHandler.empty10) {
    a++;
    soundEffekt2.play();
    soundEffekt2.loop();
  }
  if (a >= 1 && talkingHandler.activeTalk === talkingHandler.workerTalking1) {
    a++;
    soundEffekt2.stop();
    a = 2;
  }

  if (a === 2 && talkingHandler.activeTalk === talkingHandler.empty11) {
    a++;
    soundEffekt3.play();
    soundEffekt3.loop();
  }
  if (a >= 2 && talkingHandler.activeTalk === talkingHandler.friend1Talking1) {
    a++;
    soundEffekt3.stop();
    a = 3;
  }

  if (a === 3 && talkingHandler.activeTalk === talkingHandler.fbi) {
    a++;
    soundEffekt4.play();
    music4.stop();
  }

  //music

  if (m === 0 && talkingHandler.activeTalk === talkingHandler.hologram1) {
    m++;
    soundEffekt1.stop();
    music1.play();
    music1.loop();
  }
  if (m === 1 && talkingHandler.activeTalk === talkingHandler.hologram2) {
    m++;

    music1.stop();
    music2.play();
    music2.loop();
  }
  if (m === 2 && talkingHandler.activeTalk === talkingHandler.empty12) {
    m++;
    music2.stop();
    music3.play();
    music3.loop();
  }

  if (m === 3 && talkingHandler.activeTalk === talkingHandler.selfSpeech13) {
    m++;
    music2.stop(); // muss immer drin bleiben
    music3.stop();
    music4.play();
    music4.loop();
  }
  if (m === 3 && talkingHandler.activeTalk === talkingHandler.selfSpeech20) {
    m++;
    music2.stop(); // muss immer drin bleiben
    music3.stop();
    music4.play();
    music4.loop();
  }
  if (m === 3 && talkingHandler.activeTalk === talkingHandler.selfSpeech21) {
    m++;
    music2.stop(); // muss immer drin bleiben
    music3.stop();
    music4.play();
    music4.loop();
  }
  if (m <= 4 && talkingHandler.activeTalk === talkingHandler.end) {
    m++;
    soundEffekt4.stop();
    music2.stop(); // muss immer drin bleiben
    music4.stop();
    music5.play();
    music5.loop();
  }

  //Mentor
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
  if (talkingHandler.activeTalk === talkingHandler.empty2) {
    paper.keyPressed();
  }
}
window.keyPressed = keyPressed;

function mouseMoved() {
  if (start.start === false) {
    start.mouseMoved();
  } else {
    talkingHandler.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.end) {
    end.mouseMoved();
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
    if (window1Button.triggered === false) {
      if (character.triggered === false) {
        if (phone.triggered === false) {
          phone.mouseMoved();
        } else {
          phoneButton.mouseMoved();
        }
        if (phoneButton.triggered === false) {
          doorButton.mouseMoved();
        }
      }
      if (phoneButton.triggered === false) {
        character.mouseMoved();
      }
    }

    if (phoneButton.triggered === false && character.triggered === false) {
      window1Button.mouseMoved();
    }
  }
  if (window1Button.triggered === true) {
    leaveScreen.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty6) {
    if (phoneButton.triggered === false && character.triggered === false) {
      bossButton.mouseMoved();
      window2Button.mouseMoved();
      cameraButton.mouseMoved();
    }
    if (character.triggered === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggered === false) {
      character.mouseMoved();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty11) {
    if (character.triggered === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggered === false) {
      character.mouseMoved();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty12) {
    if (character.triggered === false && phoneButton.triggered === false) {
      friendsButton.mouseMoved();
      monitoringDesk.mouseMoved();
      peopleButton.mouseMoved();
    }
    if (character.triggered === false) {
      phoneButton.mouseMoved();
    }
    if (phoneButton.triggered === false) {
      character.mouseMoved();
    }
  }
  if (character.triggered === true) {
    xCharacterButton.mouseMoved();
  }
  if (phoneButton.triggered === true) {
    xPhoneButton.mouseMoved();
  }
  if (
    window2Button.triggered === true ||
    cameraButton.triggered === true ||
    monitoringDesk.triggered === true ||
    peopleButton.triggered === true
  ) {
    leaveScreen.mouseMoved();
  }
  if (
    talkingHandler.activeTalk === talkingHandler.hologramEmotion1 ||
    talkingHandler.activeTalk === talkingHandler.hologramEmotion2 ||
    talkingHandler.activeTalk === talkingHandler.hologramEmotion3
  ) {
    happyButton.mouseMoved();
    surprisedButton.mouseMoved();
    neutralButton.mouseMoved();
    sadButton.mouseMoved();
    angryButton.mouseMoved();
  }
  if (talkingHandler.activeTalk === talkingHandler.hologramEvaluation) {
    evaluationButton.mouseMoved();
  }
}
window.mouseMoved = mouseMoved;

function mouseClicked() {
  if (start.start === false) {
    start.mouseClicked();
  } else {
    talkingHandler.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.end) {
    end.mouseClicked();
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
    if (window1Button.triggered === false) {
      if (character.triggered === false) {
        if (phone.triggered === false) {
          phone.mouseClicked();
        } else {
          phoneButton.mouseClicked();
        }
        if (phoneButton.triggered === false) {
          doorButton.mouseClicked();
        }
      }
      if (phoneButton.triggered === false) {
        character.mouseClicked();
      }
    }

    if (phoneButton.triggered === false && character.triggered === false) {
      window1Button.mouseClicked();
    }
  }
  if (window1Button.triggered === true) {
    leaveScreen.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.empty6) {
    if (phoneButton.triggered === false && character.triggered === false) {
      bossButton.mouseClicked();
      window2Button.mouseClicked();
      cameraButton.mouseClicked();
    }
    if (phoneButton.triggered === false) {
      character.mouseClicked();
    }
    if (character.triggered === false) {
      phoneButton.mouseClicked();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty11) {
    if (phoneButton.triggered === false) {
      character.mouseClicked();
    }
    if (character.triggered === false) {
      phoneButton.mouseClicked();
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.empty12) {
    if (character.triggered === false && phoneButton.triggered === false) {
      friendsButton.mouseClicked();
      monitoringDesk.mouseClicked();
      peopleButton.mouseClicked();
    }
    if (phoneButton.triggered === false) {
      character.mouseClicked();
    }
    if (character.triggered === false) {
      phoneButton.mouseClicked();
    }
  }
  if (character.triggered === true) {
    xCharacterButton.mouseClicked();
  }
  if (phoneButton.triggered === true) {
    xPhoneButton.mouseClicked();
  }
  if (
    window2Button.triggered === true ||
    cameraButton.triggered === true ||
    monitoringDesk.triggered === true ||
    peopleButton.triggered === true
  ) {
    leaveScreen.mouseClicked();
  }
  if (
    talkingHandler.activeTalk === talkingHandler.hologramEmotion1 ||
    talkingHandler.activeTalk === talkingHandler.hologramEmotion2 ||
    talkingHandler.activeTalk === talkingHandler.hologramEmotion3
  ) {
    happyButton.mouseClicked();
    surprisedButton.mouseClicked();
    neutralButton.mouseClicked();
    sadButton.mouseClicked();
    angryButton.mouseClicked();
  }
  if (talkingHandler.activeTalk === talkingHandler.hologramEvaluation) {
    c++;
    if (c >= 3) {
      evaluationButton.mouseClicked();
      c = 0;
    }
  }

  if (talkingHandler.activeTalk === talkingHandler.talking3Decision1) {
    c++;
    if (c >= 2) {
      bikeButton.mouseClicked();
      carButton.mouseClicked();
      trainButton.mouseClicked();
      c = 0;
    }
  }
  if (
    talkingHandler.activeTalk === talkingHandler.talking2Decision3 ||
    talkingHandler.activeTalk === talkingHandler.talking2Decision4 ||
    talkingHandler.activeTalk === talkingHandler.talking2Decision7 ||
    talkingHandler.activeTalk === talkingHandler.talking2Decision8
  ) {
    c++;
    if (c >= 2) {
      decision1.mouseClicked();
      decision2.mouseClicked();
      c = 0;
    }
  }
  if (talkingHandler.activeTalk === talkingHandler.talking4Decision4) {
    c++;
    if (c >= 2) {
      partyButton.mouseClicked();
      c = 0;
    }
  }
  if (
    talkingHandler.activeTalk === talkingHandler.selfSpeech19 ||
    talkingHandler.activeTalk === talkingHandler.selfSpeech22
  ) {
    c++;
    if (c >= 2) {
      swichScreen.mouseClicked();
      c = 0;
    }
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken unten im screen
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
      if (beamerButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.mentorTalking20;
      }
      break;
    case talkingHandler.mentorTalking20:
      image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
      break;
    case talkingHandler.empty4:
      i++;
      if (i <= 20) {
        fill(220, 220, 220);
        rect(15, 15, 1300, 600);
      } else if (i >= 36) {
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
    case talkingHandler.selfSpeech1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneImage, 800, 440, 70, 10);
      break;
    case talkingHandler.empty5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);

      if (window1Button.effect === true) {
        image(messyRoomBackgroundWindow, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (doorButton.effect === true) {
        image(messyRoomBackgroundDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      doorButton.display();
      if (phone.triggered === false && doorButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech3;
      }
      if (phone.triggered === true && doorButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech4;
      }
      if (phone.triggered === false) {
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
      if (phoneButton.triggered === true) {
        image(phoneBig, 510, 30, 300, 570); //gesperrter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("09:00", 660, 200);
        xPhoneButton.display();

        if (xPhoneButton.triggered === true) {
          phoneButton.triggered = false;
          xPhoneButton.triggered = false;
        }
        textSize(14);
        noStroke();
        if (xPhoneButton.effect === true) {
          fill(220, 220, 220);
        } else {
          fill(100, 100, 100);
        }
        text("x", 791.7, 46.3);
      }
      window1Button.display();
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggered === true) {
        characterOverview1.display();
        xCharacterButton.display();
        // this.text = "Gehe zum Bewerbungsgespräch";
        if (xCharacterButton.triggered === true) {
          character.triggered = false;
          xCharacterButton.triggered = false;
        }
      }
      if (window1Button.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech2;
      }

      break;
    case talkingHandler._selfSpeech2:
      image(cityBackground, 15, 15, 1300, 600, 1, 0, 5421, 2519);
      image(characterButton, 20, 630, 100, 100);
      if (phone.triggered === true) {
        image(phoneButtonImage, 1245, 630, 65, 100);
      }
      leaveScreen.display();
      if (leaveScreen.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.empty5;
        window1Button.triggered = false;
        leaveScreen.triggered = false;
      }
      break;
    case talkingHandler.selfSpeech3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneImage, 800, 440, 70, 10);
      doorButton.triggered = false;
      break;
    case talkingHandler.selfSpeech4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking3Decision1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      bikeButton.display();
      carButton.display();
      trainButton.display();
      if (bikeButton.triggered === true) {
        surveilScore += 6.25;
        talkingHandler.activeTalk = talkingHandler.empty6;
      }
      if (carButton.triggered === true) {
        surveilScore += 12.5;
        talkingHandler.activeTalk = talkingHandler.empty6;
      }
      if (trainButton.triggered === true) {
        surveilScore += 18.75;
        talkingHandler.activeTalk = talkingHandler.empty6;
      }
      break;
    case talkingHandler.empty6:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggered === true) {
        characterOverview2.display();
        xCharacterButton.display();
        if (xCharacterButton.triggered === true) {
          character.triggered = false;
          xCharacterButton.triggered = false;
        }
      }
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      if (phoneButton.triggered === true) {
        image(phoneBig, 510, 30, 300, 570); //gesperrter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("11:00", 660, 200);
        xPhoneButton.display();
        if (xPhoneButton.triggered === true) {
          phoneButton.triggered = false;
          xPhoneButton.triggered = false;
        }
        textSize(14);
        noStroke();
        if (xPhoneButton.effect === true) {
          fill(220, 220, 220);
        } else {
          fill(100, 100, 100);
        }
        text("x", 791.7, 46.3);
      }
      if (bossButton.effect === true) {
        image(officeBoss, 15, 15, 1300, 600);
      }
      if (bossButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.bossTalking1;
      }
      bossButton.display();
      if (window2Button.effect === true) {
        image(officewindow, 15, 15, 1300, 600);
      }
      window2Button.display();
      if (window2Button.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech23;
      }
      if (cameraButton.effect === true) {
        image(officecamera, 15, 15, 1300, 600);
      }
      cameraButton.display();
      if (cameraButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech24;
      }
      break;
    case talkingHandler.selfSpeech23:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.empty6;
        window2Button.triggered = false;
        leaveScreen.triggered = false;
      }
      break;
    case talkingHandler.selfSpeech24:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.empty6;
        cameraButton.triggered = false;
        leaveScreen.triggered = false;
      }
      break;
    case talkingHandler.bossTalking1:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking1_1:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking2:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.bossTalking2_1:
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
    case talkingHandler.selfSpeech5:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision3:
      image(officeBackground, 15, 15, 1300, 600);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      decision1.display();
      decision2.display();
      if (decision1.triggered === true) {
        surveilScore += 0;
        talkingHandler.activeTalk = talkingHandler.bossTalking10;
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        surveilScore += 25;
        talkingHandler.activeTalk = talkingHandler.bossTalking12;
        decision2.triggered = false;
      }
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
      if (happyButton.triggered === true) {
        happy += 1;
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (surprisedButton.triggered === true) {
        surprised += 1;
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (neutralButton.triggered === true) {
        neutral += 1;
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (sadButton.triggered === true) {
        sad += 1;
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      if (angryButton.triggered === true) {
        angry += 1;
        talkingHandler.activeTalk = talkingHandler.hologram2;
      }
      break;
    case talkingHandler.hologram2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      happyButton.triggered = false;
      surprisedButton.triggered = false;
      neutralButton.triggered = false;
      sadButton.triggered = false;
      angryButton.triggered = false;
      break;
    case talkingHandler.message1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 30, 300, 570);
      talkingHandler.message1.display();

      break;
    case talkingHandler.talking2Decision4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 30, 300, 570);
      talkingHandler.message1.display();
      if (decision1.triggered === true) {
        surveilScore += 0;
        talkingHandler.activeTalk = talkingHandler.empty7;
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        surveilScore += 12.5;
        talkingHandler.activeTalk = talkingHandler.selfSpeech7;
        decision2.triggered = false;
      }
      break;
    case talkingHandler.empty7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 30, 300, 570);

      noStroke();
      fill(220, 220, 220);
      textSize(17);
      text("*ring*", 1250, 250);
      doorButton.triggered = false;
      j++;
      if (j >= 20) {
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      break;
    case talkingHandler.selfSpeech7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 30, 300, 570);
      break;
    case talkingHandler.talking2Decision5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerVideo, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.userTalking1:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking5:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking7:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.talking2Decision6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking10:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.empty8:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
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
      image(partnerFacetime, 510, 30, 300, 570);
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
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.userTalking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      break;
    case talkingHandler.partnerTalking12:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(partnerFacetime, 510, 30, 300, 570);
      doorButton.triggered = false;
      break;
    case talkingHandler.hologramEmotion2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
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
      if (happyButton.triggered === true) {
        happy += 1;
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      if (surprisedButton.triggered === true) {
        surprised += 1;
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      if (neutralButton.triggered === true) {
        neutral += 1;
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      if (sadButton.triggered === true) {
        sad += 1;
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      if (angryButton.triggered === true) {
        angry += 1;
        talkingHandler.activeTalk = talkingHandler.empty10;
      }
      break;
    case talkingHandler.empty10:
      j = 0;
      happyButton.triggered = false;
      surprisedButton.triggered = false;
      neutralButton.triggered = false;
      sadButton.triggered = false;
      angryButton.triggered = false;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.triggered === true) {
        image(phoneBig, 510, 30, 300, 570);
        fill(30, 30, 30);
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("14:00", 660, 200);
        xPhoneButton.display();
        if (xPhoneButton.triggered === true) {
          phoneButton.triggered = false;
          xPhoneButton.triggered = false;
        }
        textSize(14);
        noStroke();
        if (xPhoneButton.effect === true) {
          fill(220, 220, 220);
        } else {
          fill(100, 100, 100);
        }
        text("x", 791.7, 46.3);
      }
      doorButton.display();
      if (doorButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.workerTalking1;
      }
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      image(characterButton, 20, 630, 100, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggered === true) {
        characterOverview3.display();
        xCharacterButton.display();
        if (xCharacterButton.triggered === true) {
          character.triggered = false;
          xCharacterButton.triggered = false;
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
      if (decision1.triggered === true) {
        securityDoor = true;
        surveilScore += 12.5;
        talkingHandler.activeTalk = talkingHandler.workerTalking9;
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        surveilScore += 0;
        talkingHandler.activeTalk = talkingHandler.workerTalking10;
        decision2.triggered = false;
      }
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
      v++;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggered === true) {
        characterOverview4.display();
        xCharacterButton.display();
        if (xCharacterButton.triggered === true) {
          character.triggered = false;
          xCharacterButton.triggered = false;
        }
      }
      image(phoneText, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneTextEffect, 1243, 628, 69, 104);
      }
      if (v >= 10) {
        image(vibration, 1233, 618, 88, 123);
      }
      if (v >= 20) {
        v = 0;
      }
      if (phoneButton.triggered === true) {
        image(phoneBig, 510, 30, 300, 570); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("17:00", 660, 200);
        xPhoneButton.display();
        if (xPhoneButton.triggered === true) {
          phoneButton.triggered = false;
          xPhoneButton.triggered = false;
        }
        textSize(14);
        noStroke();
        if (xPhoneButton.effect === true) {
          fill(220, 220, 220);
        } else {
          fill(100, 100, 100);
        }
        text("x", 791.7, 46.3);

        image(phoneButtonImage, 470, 25, 360, 580);
        talkingHandler.activeTalk = talkingHandler.friend1Talking1;
      }
      break;
    case talkingHandler.friend1Talking1:
      phoneButton.triggered = false;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 30, 300, 570);
      break;
    case talkingHandler.talking4Decision4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 30, 300, 570);
      image(friend, 510, 35, 300, 580);
      partyButton.display();
      if (partyButton.triggered === true) {
        surveilScore += 6.25;
        talkingHandler.activeTalk = talkingHandler.friend1Talking2;
        partyButton.triggered = false;
      }
      break;
    case talkingHandler.friend1Talking2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 30, 300, 570);
      break;
    case talkingHandler.friend1Talking3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 30, 300, 570);
      break;
    case talkingHandler.friend1Talking4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(friend, 510, 30, 300, 570);
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
    case talkingHandler.selfSpeech11:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeech12:
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
      if (friendsButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.friend1Talking5;
      }
      friendsButton.display();
      if (monitoringDesk.effect === true) {
        image(clubBackgroundDesk, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (monitoringDesk.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech25;
      }
      monitoringDesk.display();
      if (peopleButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.selfSpeech26;
      }
      if (peopleButton.effect === true) {
        image(clubBackgroundPeople, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      peopleButton.display();
      if (character.effect === true) {
        image(characterButtonEffect, 18, 628, 104, 104);
      }
      if (character.triggered === true) {
        characterOverview5.display();
        xCharacterButton.display();
        if (xCharacterButton.triggered === true) {
          character.triggered = false;
          xCharacterButton.triggered = false;
        }
      }
      image(phoneButtonImage, 1245, 630, 65, 100);
      if (phoneButton.effect === true) {
        image(phoneButtonImageEffect, 1243, 628, 69, 104);
      }
      if (phoneButton.triggered === true) {
        image(phoneBig, 510, 30, 300, 570); //gesperter Bildschirm
        fill(30, 30, 30);
        strokeWeight(3);
        textSize(50);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("22:00", 660, 200);
        xPhoneButton.display();
        if (xPhoneButton.triggered === true) {
          phoneButton.triggered = false;
          xPhoneButton.triggered = false;
        }
        textSize(14);
        noStroke();
        if (xPhoneButton.effect === true) {
          fill(220, 220, 220);
        } else {
          fill(100, 100, 100);
        }
        text("x", 791.7, 46.3);
      }
      break;
    case talkingHandler.selfSpeech25:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.empty12;
        monitoringDesk.triggered = false;
        leaveScreen.triggered = false;
      }
      break;
    case talkingHandler.selfSpeech26:
      image(clubBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      leaveScreen.display();
      if (leaveScreen.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.empty12;
        peopleButton.triggered = false;
        leaveScreen.triggered = false;
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
      if (decision1.triggered === true) {
        surveilScore += 0;
        talkingHandler.activeTalk = talkingHandler.friend3Talking2;
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        surveilScore += 25;
        talkingHandler.activeTalk = talkingHandler.friend1Talking8;
        decision2.triggered = false;
      }
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
    case talkingHandler.selfSpeech13:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeech14:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeech15:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.message2:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(phoneBigclear, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech16:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech17:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech18:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 30, 300, 570);
      break;
    case talkingHandler.selfSpeech19:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(party, 510, 30, 300, 570);
      if (swichScreen.triggered) {
        if (securityDoor === true) {
          talkingHandler.activeTalk = talkingHandler.hologram4;
        } else {
          talkingHandler.activeTalk = talkingHandler.selfSpeech20;
        }
      }

      break;
    case talkingHandler.selfSpeech20:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);

      break;
    case talkingHandler.selfSpeech21:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.selfSpeech22:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      if (swichScreen.triggered) {
        if (securityDoor === true) {
          talkingHandler.activeTalk = talkingHandler.hologram4;
        } else {
          talkingHandler.activeTalk = talkingHandler.selfSpeech20;
        }
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologramEmotion3:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(hologram, 331, 159, 654, 292);
      image(smiley, 402, 315, 511, 96);
      happyButton.display();
      surprisedButton.display();
      neutralButton.display();
      sadButton.display();
      angryButton.display();
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
      if (happyButton.triggered === true) {
        happy += 1;
        talkingHandler.activeTalk = talkingHandler.hologram4;
      }
      if (surprisedButton.triggered === true) {
        surprised += 1;
        talkingHandler.activeTalk = talkingHandler.hologram4;
      }
      if (neutralButton.triggered === true) {
        neutral += 1;
        talkingHandler.activeTalk = talkingHandler.hologram4;
      }
      if (sadButton.triggered === true) {
        sad += 1;
        talkingHandler.activeTalk = talkingHandler.hologram4;
      }
      if (angryButton.triggered === true) {
        angry += 1;
        talkingHandler.activeTalk = talkingHandler.hologram4;
      }
      break;
    case talkingHandler.hologram4:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      evaluationButton.triggered = false;
      break;
    case talkingHandler.hologramEvaluation:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      image(hologram, 331, 159, 654, 292);
      evaluationButton.display();
      image(evaluationSmiley, 402, 340, 511, 80);
      strokeWeight(2);
      stroke(0, 220, 240);
      noFill();
      rect(400, 270, 500, 20, 5);
      noStroke();
      fill(0, 220, 240);
      rect(400, 270, surveilScore * 5, 20, 5);
      fill(220, 220, 220);
      textAlign(LEFT);
      textSize(16);
      text(
        "Durch deine Entscheidungen wurdest du zu " +
          surveilScore +
          "% während deines Aufenthalts überwacht.",
        380,
        250
      );
      text("Deine ausgewählten Emotionen:", 380, 315);
      text(happy + "x", 435, 335);
      text(surprised + "x", 545, 335);
      text(neutral + "x", 650, 335);
      text(sad + "x", 760, 335);
      text(angry + "x", 868, 335);
      fill(100, 100, 100);
      if (evaluationButton.effect === true) {
        fill(220, 220, 220);
      }
      text("weiter", 878, 440);
      if (evaluationButton.triggered === true) {
        talkingHandler.activeTalk = talkingHandler.hologram5;
      }

      break;
    case talkingHandler.hologram5:
      evaluationButton.triggered = false;
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.talking2Decision9:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;
    case talkingHandler.hologram6:
      image(messyRoomBackground, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      if (securityDoor === true) {
        image(newDoor, 15, 15, 1300, 600, 0, 0, 8300, 3300);
      }
      image(characterButton, 20, 630, 100, 100);
      image(phoneButtonImage, 1245, 630, 65, 100);
      break;

    case talkingHandler.end:
      e++;
      fill(30, 30, 30);
      rect(10, 10, 1300, 600);
      if (e <= 30) {
        textSize(100);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("ENDE", 650, 300);
      } else if (e >= 30) {
        credits.display();
        credits.y -= 3;
        // // creditsY + 0, 2;
        // creditsY = creditsY-3;
      }
      if (end.end === true) {
        relode();
      }
      // relode();
      fill(30, 30, 30);
      rect(10, 615, 1310, 130);
      fill(60, 60, 60);
      rect(10, 745, 1310, 1000);
      rect(10, 0, 1310, 10);
      end.display();

      break;
    // case Abspann:
  }

  if (start.start === false) {
    start.display();
  } else {
    talkingHandler.display();
  }
  console.log(surveilScore);
  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(10);
  line(10, 10, 1320, 10);
  line(10, 10, 10, 610);
  line(1320, 10, 1320, 610);
  // rect(10, 10, 1310, 610);
}

window.draw = draw;
