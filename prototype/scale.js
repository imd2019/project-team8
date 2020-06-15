export default class Skale {
  constructor(x, y, width, height, scale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }
  display() {
    noFill();
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    fill(180, 0, 125);
    rect(this.x, this.y, this.scale, this.height, 15);
  }
}
