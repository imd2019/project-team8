import { laboratoryBackground, beamer } from "./p5setup.js";

import Button from "./button.js";
import Talking from "./talking.js";
import Start from "./start.js";

//talking Counter
let talking = new Talking(305, 630, 700, 100, " ", " ");
//Buttons
let start = new Start(562.5, 337.5, 185, 65, talking);
let phoneButton = new Button(1200, 630, 80, 100);
let beamerButton = new Button(650, 210, 230, 370);

//Talking

//szene 1
let mentorTalking1 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Die Welt entwickelt sich sehr viel schneller weiter, als dir bewusst ist."
);
let mentorTalking2 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Der technologische Fortschritt schleicht sich an, so dass einem gar nicht auffällt, dass all diese Science-Fiction-Filme gar nicht so weit von unserer Realität entfernt sind."
);
let mentorTalking3 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Und aus diesem Grund wird uns gar nicht die Zeit gegeben, um darüber nachzudenken, was das tatsächlich für uns bedeutet."
);
let mentorTalking4 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Aus diesem Grund brauche ich dich."
);
let mentorTalking5 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Sag mal, wieso ist es eigentlich so dunkel hier drin?"
);
let mentorTalking6 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Also, nochmal zum Thema zurück, unser Unternehmen ist dabei wirklich drastische Entscheidungen zu treffen und das bereitet mir Sorgen."
);
let mentorTalking7 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Diese Maschine hier wird dich in ein paralleles Universum transportieren, das schon um einiges fortschrittlicher ist als unseres."
);
let mentorTalking8 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Ob das ungefährlich ist? Natürlich! Zumindest soweit ich weiß, hehe…"
);
let mentorTalking9 = new Talking(
  305,
  630,
  700,
  100,
  "Mentor",
  "Also! Bevor wir anfangen muss ich dich noch einmal fragen, ob du diese Mission wirklich antreten möchtest. Bist du dabei?"
);

function mouseMoved() {
  if (start.start === false) {
    start.mouseMoved();
  } else if (talking.counter >= 1 && talking.counter <= 9) {
    //Talking
    mentorTalking1.mouseMoved();
    mentorTalking2.mouseMoved();
    mentorTalking3.mouseMoved();
    mentorTalking4.mouseMoved();
    mentorTalking5.mouseMoved();
    mentorTalking6.mouseMoved();
    mentorTalking7.mouseMoved();
    mentorTalking8.mouseMoved();
    mentorTalking9.mouseMoved();
  }
  phoneButton.mouseMoved();
  beamerButton.mouseMoved();
}
window.mouseMoved = mouseMoved;

function mouseClicked() {
  if (start.start === false) {
    start.mouseClicked();
  }
  phoneButton.mouseClicked();
  beamerButton.mouseClicked();

  //Talking
  if (talking.counter >= 1 && talking.counter <= 9) {
    talking.mouseClicked();
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  clear();
  //Balken untern im screen
  fill(30, 30, 30);
  rect(10, 610, 1310, 130);

  //Hintergründe
  //schwarzer Hintergrund
  if (start.start === false || talking.counter < 6) {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
  } else {
    image(laboratoryBackground, 15, 15, 1300, 600, 150, 0, 6500, 3000);
  }

  //Button
  if (start.start === false) {
    start.display();
  } else {
    //Text
    switch (talking.counter) {
      case 0:
        break;
      case 1:
        mentorTalking1.display();
        break;
      case 2:
        mentorTalking2.display();
        break;
      case 3:
        mentorTalking3.display();
        break;
      case 4:
        mentorTalking4.display();
        break;
      case 5:
        mentorTalking5.display();
        break;
      case 6:
        mentorTalking6.display();
        break;
      case 7:
        mentorTalking7.display();
        image(beamer, 639, 135, 240, 440);
        break;
      case 8:
        mentorTalking8.display();
        break;
      case 9:
        mentorTalking9.display();
        break;
    }
  }
  if (talking.counter >= 6) {
    //phoneButton.display();
    //beamerButton.display();

    //Gegenstände
    if (beamerButton.effect === true) {
      image(beamer, 639, 135, 240, 440);
    }
  }
  //Umrandung
  noFill();
  stroke(30, 30, 30);
  strokeWeight(10);
  rect(10, 10, 1310, 610);
}

window.draw = draw;
