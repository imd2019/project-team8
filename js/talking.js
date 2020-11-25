import Button from "./button.js";

export default class Talking extends Button {
  constructor(x, y, width, height, person, text) {
    super(x, y, width, height);
    this.person = person;
    this.text = text;
    this.next = this;
    this.handler = null;
  }
  // preload() {
  //   myFont = loadFont(`Hack-Regular.ttf`);
  // }
  // setup() {
  //   textFont(myFont);
  // }
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
    textSize(16);
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
      //handler wird durch this.handler ersetzt, jedes Objekt hat eigenen handler
      //durch das Klicken wird gewechselt zwischen den Szenen
      this.handler.activeTalk = this.next;
    }
  }
  changeNext(next, handler) {
    this.next = next;
    this.handler = handler;
  }
}
