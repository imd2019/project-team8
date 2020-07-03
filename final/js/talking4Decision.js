export default class Talking4Decision {
  constructor(x, y, width, height, text1, text2, text3, text4) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
    this.text4 = text4;
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
    rect(this.x, this.y, this.width, this.height / 2, 15);
    rect(this.x + 550, this.y, this.width, this.height / 2, 15);
    rect(
      this.x,
      this.y + this.height / 2 + 10,
      this.width,
      this.height / 2,
      15
    );
    rect(
      this.x + 550,
      this.y + this.height / 2 + 10,
      this.width,
      this.height / 2,
      15
    );
    // strokeWeight(1);
    // textSize(10);
    textAlign(LEFT);
    // fill(180, 0, 125);
    fill(220, 220, 220);
    noStroke();
    textSize(16);
    text(
      this.text1,
      this.x + 15,
      this.y + 15,
      this.width - 15,
      this.height - 15
    );
    text(
      this.text2,
      this.x + 565,
      this.y + 15,
      this.width - 15,
      this.height - 15
    );
    text(
      this.text3,
      this.x + 15,
      this.y + this.height / 2 + 25,
      this.width - 15,
      this.height - 15
    );
    text(
      this.text4,
      this.x + 565,
      this.y + this.height / 2 + 25,
      this.width - 15,
      this.height - 15
    );
    textSize(10);
    if (this.effect1 === false) {
      fill(100, 100, 100);
    }
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 25, this.width - 5, this.height + 15);
    if (this.effect2 === false) {
      fill(100, 100, 100);
    } else {
      fill(220, 220, 220);
    }
    text("weiter", this.x + 550, this.y + 25, this.width - 5, this.height + 15);
    if (this.effect3 === false) {
      fill(100, 100, 100);
    } else {
      fill(220, 220, 220);
    }
    text(
      "weiter",
      this.x,
      this.y + this.height / 2 + 35,
      this.width - 5,
      this.height + 15
    );
    if (this.effect4 === false) {
      fill(100, 100, 100);
    } else {
      fill(220, 220, 220);
    }
    text(
      "weiter",
      this.x + 550,
      this.y + this.height / 2 + 35,
      this.width - 5,
      this.height + 15
    );
  }
  hitTest1(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTest2(x, y) {
    if (
      x > this.x + 550 &&
      x < this.x + 550 + this.width &&
      y > this.y &&
      y < this.y + this.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTest3(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y + this.height / 2 + 10 &&
      y < this.y + this.height + 10
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTest4(x, y) {
    if (
      x > this.x + 550 &&
      x < this.x + 550 + this.width &&
      y > this.y + this.height / 2 + 10 &&
      y < this.y + this.height + 10
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
    if (this.hitTest3(mouseX, mouseY)) {
      this.effect3 = true;
    } else {
      this.effect3 = false;
    }
    if (this.hitTest4(mouseX, mouseY)) {
      this.effect4 = true;
    } else {
      this.effect4 = false;
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
    if (this.hitTest3(mouseX, mouseY)) {
      if (this.handler3 != null) {
        this.handler3.activeTalk = this.next3;
      }
    }
    if (this.hitTest4(mouseX, mouseY)) {
      if (this.handler4 != null) {
        this.handler4.activeTalk = this.next4;
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
  changeNext3(next3, handler3) {
    this.next3 = next3;
    this.handler3 = handler3;
  }
  changeNext4(next4, handler4) {
    this.next4 = next4;
    this.handler4 = handler4;
  }
}
