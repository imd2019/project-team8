import PhoneButton from "./phoneButton.js";
import PlayerButton from "./playerButton.js";
import Talking from "./talking.js";
import Choice from "./choice.js";
import Question from "./question.js";
import Phone from "./phone.js";
import PlayerOverview from "./playerOverview.js";

let phoneButton = new PhoneButton(820, 510, 70, 100);
let playerButton = new PlayerButton(10, 510, 100, 100);
let talking = new Talking(150, 500, 630, 100);
let choice1 = new Choice(350, 350, 80, 35, "choice1");
let choice2 = new Choice(450, 350, 80, 35, "choice2");
let question1 = new Question(315, 250, 250, 150, "Question1");
let phone = new Phone(290, 80, 300, 520, phoneButton);
let playerOverview = new PlayerOverview(270, 200, 400, 300);

function mouseClicked() {
  phoneButton.mouseClicked();
  playerButton.mouseClicked();
  talking.mouseClicked();
  choice1.mouseClicked();
  choice2.mouseClicked();
}
window.mouseClicked = mouseClicked;
function draw() {
  clear();
  background(30, 30, 30);
  // switch (this.screen) {
  //   case "HomeScreen":
  //     break;
  //   case "PhoneScreen":
  //     phone.display();
  //     break;
  //   case "Question1Screen":
  //     question1.display();
  //     choice1.display();
  //     choice2.display();
  //     break;
  //   case "talking1Screen":
  //     talking.display();
  //     break;
  // }
  if (phoneButton.phoneScreen === true) {
    phone.display();
  }
  if (playerButton.playerScreen === true) {
    playerOverview.display();
  }

  phoneButton.display();
  playerButton.display();
}
window.draw = draw;
