import Click from "./click.js";
//Handy vom Spieler
export default class PhoneButton extends Click {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.t = 0;
    this.min = 0;
    this.h = 0;
    this.phoneScreen = false;
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
    rect(this.x, this.y, this.width, this.height, 15);
    fill(180, 0, 125);
    rect(this.x + this.width / 2.65, this.y + 5, this.width / 4, 1, 1);
    this.clock();
    noStroke();
    fill(220, 220, 220);
    textSize(30);
    textAlign(CENTER);
    text(this.h, this.x + this.width / 2, this.y + this.height / 2);
    text(this.min, this.x + this.width / 2, this.y + this.height / 2 + 30);
  }
  clicked() {
    if (this.phoneScreen === false) {
      this.phoneScreen = true;
    } else {
      this.phoneScreen = false;
    }
    console.log("Phone");
  }
}
