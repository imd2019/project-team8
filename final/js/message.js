import Button from "./button.js";

export default class Message extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height);
    this.text = text;
    this.next = this;
    this.handler = null;
  }

  display() {
    textAlign(CENTER);
    fill(220, 220, 220);
    noStroke();
    textSize(18);
    text(this.text, this.x, this.y, this.width, this.height);
    textSize(14);
    if (this.effect === false) {
      fill(100, 100, 100);
    }
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 250, this.width - 5, this.height + 15);
  }
  clicked() {
    if (this.handler != null) {
      this.handler.activeTalk = this.next;
    }
  }
  changeNext(next, handler) {
    this.next = next;
    this.handler = handler;
  }
}
