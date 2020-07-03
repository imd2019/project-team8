// import Button from "./button.js";

export default class Talking2Decision {
  constructor(x, y, width, height, person, text1, text2) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.person = person;
    this.text1 = text1;
    this.text2 = text2;
    this.next = this;
    this.handler = null;
  }
  // preload() {
  //   this.text = loadFont("https://use.typekit.net/dss7qvd.css");
  // }
  // setup() {
  //   fill("black");
  //   textFont(this.text);
  // }
  display() {
    fill(30, 30, 30, 180);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    rect(this.x + 360, this.y, this.width, this.height, 15);
    strokeWeight(1);
    textSize(16);
    textAlign(LEFT);
    // fill(180, 0, 125);
    fill(220, 220, 220);
    // text(this.person, this.x + 15, this.y + 25);
    // text(this.person, this.x + 375, this.y + 25);
    noStroke();
    textSize(16);
    text(
      this.text1,
      this.x + 15,
      this.y + 25,
      this.width - 15,
      this.height - 15
    );
    text(
      this.text2,
      this.x + 375,
      this.y + 25,
      this.width - 15,
      this.height - 15
    );
    textSize(14);
    if (this.effect1 === false) {
      fill(100, 100, 100);
    }
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 80, this.width - 5, this.height + 15);
    if (this.effect2 === false) {
      fill(100, 100, 100);
    } else {
      fill(220, 220, 220);
    }
    text("weiter", this.x + 360, this.y + 80, this.width - 5, this.height + 15);
  }
  hitTest1(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTest2(x, y) {
    if (
      x > this.x + 360 &&
      x < this.x + 360 + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  mouseMoved() {
    if (this.hitTest1(mouseX, mouseY)) {
      this.effect1 = true;
    } else {
      this.effect1 = false;
    }
    if (this.hitTest2(mouseX, mouseY)) {
      this.effect2 = true;
    } else {
      this.effect2 = false;
    }
  }
  mouseClicked() {
    if (this.hitTest1(mouseX, mouseY)) {
      if (this.handler1 != null) {
        this.handler1.activeTalk = this.next1;
      }
    }
    if (this.hitTest2(mouseX, mouseY)) {
      if (this.handler2 != null) {
        this.handler2.activeTalk = this.next2;
      }
    }
  }
  changeNext1(next1, handler1) {
    this.next1 = next1;
    this.handler1 = handler1;
  }
  changeNext2(next2, handler2) {
    this.next2 = next2;
    this.handler2 = handler2;
  }
}
