import Click from "./click.js";
//buttons zur Auswahl der verschiedenen Entscheidungsmöglichkeiten
export default class Choice extends Click {
  constructor(x, y, width, height, text) {
    super(x, y, width, height);
    this.text = text;
  }
  display() {
    noFill();
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    noStroke();
    fill(220, 220, 220);
    textAlign(CENTER);
    textSize(15);
    text(this.text, this.x + 2, this.y + 10, this.width, this.height);
  }
  clicked() {
    console.log(this.text);
  }
}
