export default class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.triggert = false;
  }
  display() {
    if (this.effect === true) {
      stroke(200, 200, 200);
      strokeWeight(2);
    } else {
      noStroke();
    }

    fill(100, 100, 100);
    rect(this.x, this.y, this.width, this.height);
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
      // if (this.triggert === false) {
      //   this.triggert = true;
      // } else {
      //   this.triggert = false;
      // }
    }
  }
}
