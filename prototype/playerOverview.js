export default class PlayerOverview {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.screen = "PlayerScreen";
  }
  display() {
    fill(30, 30, 30);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    ellipse(this.x + 50, this.y + 50, 80, 80);
    arc(this.x + 50, this.y + 87, 60, 60, 3.6, 5.8);
    ellipse(this.x + 50, this.y + 40, 30, 30);
  }
}
