import Talking from "./talking.js";
import Choice from "./choice.js";
import Question from "./question.js";
import Phone from "./phone.js";
import PlayerOverview from "./playerOverview.js";
import Scale from "./scale.js";

export default class ScreenHandler {
  constructor(phoneButton, playerButton, questionButton, textButton) {
    this.phoneButton = phoneButton;
    this.playerButton = playerButton;
    this.questionButton = questionButton;
    this.textButton = textButton;

    this.talking = new Talking(180, 500, 560, 100);
    this.choice1 = new Choice(350, 350, 80, 35, "choice1");
    this.choice2 = new Choice(450, 350, 80, 35, "choice2");
    this.question1 = new Question(315, 250, 250, 150, "Question1");
    this.phone = new Phone(290, 80, 300, 520, phoneButton);
    this.playerOverview = new PlayerOverview(270, 200, 400, 300);
    this.scale1 = new Scale(380, 220, 250, 10, 200);
    this.scale2 = new Scale(380, 250, 250, 10, 160);
  }
  display() {
    if (
      this.phoneButton.phoneScreen === false &&
      this.playerButton.playerScreen === false &&
      this.questionButton.screen === false &&
      this.textButton.screen === false
    ) {
      this.screen = "homeScreen";
    }
    if (this.phoneButton.phoneScreen === true) {
      this.screen = "phoneScreen";
    }
    if (this.playerButton.playerScreen === true) {
      this.screen = "playerOverviewScreen";
    }
    if (this.questionButton.screen === true) {
      this.screen = "questionScreen";
    }
    if (this.textButton.screen === true) {
      this.screen = "talkingScreen";
    }
  }
}
