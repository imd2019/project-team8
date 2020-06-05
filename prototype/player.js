import Click from "./click.js";
//Button zur Übersicht vom Spieler
export default class Player extends Click {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    stroke(180, 0, 125);
    strokeWeight(3);
    noFill();
    ellipse(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width,
      this.height
    );
    arc(
      this.x + this.width / 2,
      this.y + this.height,
      this.width / 1.4,
      this.height / 1.4,
      3.6,
      5.8
    );
    ellipse(
      this.x + this.width / 2,
      this.y + this.height / 2.5,
      this.width / 2.5,
      this.height / 2.5
    );
  }
  clicked() {
    console.log("Player");
  }
}