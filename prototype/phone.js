import Click from "./click.js";
//Handy vom Spieler
export default class Phone extends Click {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.t = 0;
    this.min = 0;
    this.h = 0;
  }
  clock() {
    this.t++;
    if (this.t === 50) {
      this.min++;
      this.t = 0;
    }
    if (this.min === 60) {
      this.h++;
      this.min = 0;
    }
    if (this.h === 24 && this.min == 1) {
      this.h = 0;
      this.min = 1;
    }
  }
  display() {
    noFill();
    stroke(180, 0, 125);
    strokeWeight(3);
    fill(30, 30, 30);
    rect(this.x, this.y, this.width, this.height, 20);
    fill(180, 0, 125);
    rect(this.x + this.width / 2.5, this.y + 5, 20, 2, 2);
    this.clock();
    noStroke();
    fill(220, 220, 220);
    textSize(40);
    textAlign(CENTER);
    text(this.h, this.x + this.width / 2, this.y + this.height / 2);
    text(this.min, this.x + this.width / 2, this.y + this.height / 2 + 40);
  }
  clicked() {
    console.log("Phone");
  }
}
