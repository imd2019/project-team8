import { hologram, smiley } from "./p5setup.js";
import Button from "./button.js";

export default class HologramEmotion extends Button {
  constructor(x, y, text) {
    super(x, y, width, height);
    this.text = text;
  }
  display() {
    // image(hologram, 331, 159, 654, 292);
    // image(smiley, 402, 315, 511, 96);
    noStroke();
    fill(220, 220, 220);
    textSize(18);
    textAlign(LEFT);
    text(this.text, this.x + 30, this.y + 40, 500, 220);
    textSize(14);
  }
}
