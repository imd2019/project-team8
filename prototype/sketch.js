import PhoneButton from "./phoneButton.js";
import PlayerButton from "./playerButton.js";
import Button from "./button.js";
// import Talking from "./talking.js";
// import Choice from "./choice.js";
// import Question from "./question.js";
// import Phone from "./phone.js";
// import PlayerOverview from "./playerOverview.js";
import ScreenHandler from "./screenHandler.js";
let phoneButton = new PhoneButton(820, 510, 70, 100);
let playerButton = new PlayerButton(10, 510, 100, 100);
let questionButton = new Button(10, 10, 100, 40, "Question");
let textButton = new Button(10, 60, 100, 40, "Text");

let screenHandler = new ScreenHandler(
  phoneButton,
  playerButton,
  questionButton,
  textButton
);

function mouseClicked() {
  phoneButton.mouseClicked();
  playerButton.mouseClicked();
  questionButton.mouseClicked();
  textButton.mouseClicked();
  switch (screenHandler.screen) {
    case "phoneScreen":
      break;
    case "playerOverviewScreen":
      break;
    case "talkingScreen":
      screenHandler.talking.mouseClicked();
      break;
    case "questionScreen":
      screenHandler.choice1.mouseClicked();
      screenHandler.choice2.mouseClicked();
      break;
  }
}
window.mouseClicked = mouseClicked;
function draw() {
  clear();
  background(30, 30, 30);
  screenHandler.display();
  switch (screenHandler.screen) {
    case "phoneScreen":
      screenHandler.phone.display();
      break;
    case "playerOverviewScreen":
      screenHandler.playerOverview.display();
      screenHandler.scale1.display();
      screenHandler.scale2.display();
      break;
    case "talkingScreen":
      screenHandler.talking.display();
      break;
    case "questionScreen":
      screenHandler.question1.display();
      screenHandler.choice1.display();
      screenHandler.choice2.display();
      break;
  }

  phoneButton.display();
  playerButton.display();
  questionButton.display();
  textButton.display();
}
window.draw = draw;
