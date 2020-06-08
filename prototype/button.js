import Click from "./click.js";
//Button zum wecheln der screens
export default class Button extends Click {
  constructor(x, y, width, height, text) {
    super(x, y, width, height);
    this.text = text;
    this.screen = false;
  }
  display() {
    stroke(180, 0, 125);
    strokeWeight(3);
    noFill();
    rect(this.x, this.y, this.width, this.height, 15);
    noStroke();
    fill(220, 220, 220);
    textAlign(CENTER);
    textSize(15);
    text(this.text, this.x, this.y + this.height / 3, this.width, this.height);
  }
  clicked() {
    if (this.text === "Question" && this.screen === false) {
      this.screen = true;
      console.log("QuestionButton");
    } else if (this.text === "Question" && this.screen === true) {
      this.screen = false;
      console.log("QuestionButton");
    } else if (this.text === "Text" && this.screen === false) {
      this.screen = true;
      console.log("TextButton");
    } else if (this.text === "Text" && this.screen === true) {
      this.screen = false;
      console.log("TextButton");
    }
  }
}
