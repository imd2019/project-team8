import Button from "./button.js";

// <style>
//   @import url("https://use.typekit.net/dss7qvd.css");
// </style>
// function setup() {
//   fill("black");
//   textFont(text);
// }
// let text;
// function preload() {
//   text = loadFont("https://use.typekit.net/dss7qvd.css");
// }

export default class Talking extends Button {
  constructor(x, y, width, height, person, text) {
    super(x, y, width, height);
    this.person = person;
    this.text = text;
    this.next = this;
    this.handler = null;
  }
  preload() {
    this.text = loadFont("https://use.typekit.net/dss7qvd.css");
  }
  setup() {
    fill("black");
    textFont(this.text);
  }
  display() {
    fill(30, 30, 30, 180);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    strokeWeight(1);
    textSize(16);
    textAlign(LEFT);
    // fill(180, 0, 125);
    fill(220, 220, 220);
    text(this.person, this.x + 15, this.y + 25);
    noStroke();
    textSize(18);
    text(
      this.text,
      this.x + 15,
      this.y + 35,
      this.width - 15,
      this.height - 15
    );
    textSize(14);
    if (this.effect === false) {
      fill(100, 100, 100);
    }
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 80, this.width - 5, this.height + 15);
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
