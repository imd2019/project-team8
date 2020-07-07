export default class Button {
  constructor(x, y, width, height, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.name = name;

    this.triggered = false;
  }
  display() {
    // noFill();
    // if (this.effect === true) {
    //   stroke(200, 200, 200);
    //   strokeWeight(2);
    // } else {
    //   stroke(60, 60, 60);
    //   strokeWeight(5);
    // }

    // // fill(100, 100, 100);
    // rect(this.x, this.y, this.width, this.height);
    if (this.effect === true) {
      noStroke();
      fill(220, 220, 220);
      textSize(13);
      textAlign(CENTER);
      text(this.name, this.x, this.y - 15, this.width, this.height + 5);
    }
  }
  hitTest(x, y) {
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
  clicked() {
    //console.log("🐱‍🏍");
  }
  hovered() {
    //console.log("hi");
  }
  mouseMoved() {
    if (this.hitTest(mouseX, mouseY)) {
      this.hovered();
      this.effect = true;
    } else {
      this.effect = false;
    }
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
      if (this.triggered === false) {
        this.triggered = true;
      } else {
        this.triggered = false;
      }
    }
  }
}
