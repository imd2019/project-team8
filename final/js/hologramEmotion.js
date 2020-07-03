import { hologram } from "./p5setup.js";

export default class HologramEmotion {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
  }
  display() {
    image(hologram, 331, 159, 654, 292);
    image(smiley , 402, 315, 511, 96);
    noStroke();
    fill(220, 220, 220);
    textSize(15);
    textAlign(LEFT);
    text(this.text, this.x, this.y + 40, 500, 220);
    textSize(14);
  }
}
