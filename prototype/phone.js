import Click from "./click.js";
//Handy vom Spieler
export default class Phone extends Click {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    stroke(180, 0, 125);
    strokeWeight(3);
    fill(30, 30, 30);
    rect(this.x, this.y, this.width, this.height, 20);
    fill(180, 0, 125);
    rect(this.x + this.width / 2.5, this.y + 5, 20, 2, 2);
  }
  clicked() {
    console.log("Phone");
  }
}
