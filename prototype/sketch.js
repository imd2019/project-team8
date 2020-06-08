import PhoneButton from "./phoneButton.js";
import PlayerButton from "./playerButton.js";
// import Talking from "./talking.js";
// import Choice from "./choice.js";
// import Question from "./question.js";
// import Phone from "./phone.js";
// import PlayerOverview from "./playerOverview.js";
import ScreenHandler from "./screenHandler.js";
let phoneButton = new PhoneButton(820, 510, 70, 100);
let playerButton = new PlayerButton(10, 510, 100, 100);

let screenHandler = new ScreenHandler(phoneButton, playerButton);

function mouseClicked() {
  phoneButton.mouseClicked();
  playerButton.mouseClicked();

  screenHandler.talking.mouseClicked();
  screenHandler.choice1.mouseClicked();
  screenHandler.choice2.mouseClicked();
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
}
window.draw = draw;
