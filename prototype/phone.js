export default class Phone {
  constructor(x, y, width, height, clock) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.clock = clock;
    this.screen = "PhoneScreen";
  }
  display() {
    fill(30, 30, 30);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);
    fill(180, 0, 125);
    rect(
      this.x + this.width / 3,
      this.y + 10,
      this.width / 3,
      this.height / 50,
      15
    );
    noStroke();
    fill(220, 220, 220);
    textSize(15);
    text(this.clock.h + ":" + this.clock.min, this.x + 30, this.y + 20);
  }
}
