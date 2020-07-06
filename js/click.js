export default class Click {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    fill(255, 255, 255);
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
    console.log("🐱‍🏍");
  }
  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
}
