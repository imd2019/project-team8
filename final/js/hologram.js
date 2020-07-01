import Button from "./button.js";
import { hologram,} from "./p5setup.js";

export default class Hologramm extends Button {
  constructor(x, y, text) {
    super(x, y, 500, 380);
    this.text = text;
  }
  display() {
   image(hologram, 298, 145, 719, 320);
    // noStroke();
    // fill(30, 30, 30, 240);
    // rect(this.x, this.y, 500, 300);
    // rect(this.x - 40, this.y + 40, 40, 220);
    // rect(this.x + 500, this.y + 40, 40, 220);
    // triangle(this.x, this.y, this.x - 40, this.y + 40, this.x, this.y + 40);
    // triangle(
    //   this.x - 40,
    //   this.y + 260,
    //   this.x,
    //   this.y + 300,
    //   this.x,
    //   this.y + 260
    // );
    // triangle(
    //   this.x + 500,
    //   this.y,
    //   this.x + 540,
    //   this.y + 40,
    //   this.x + 500,
    //   this.y + 40
    // );
    // triangle(
    //   this.x + 500,
    //   this.y + 300,
    //   this.x + 540,
    //   this.y + 260,
    //   this.x + 500,
    //   this.y + 260
    // );
    //  stroke(0, 220, 240);
    //  strokeWeight(6);
    //  line(this.x, this.y, this.x + 500, this.y);
    // line(this.x, this.y + 300, this.x + 500, this.y + 300);
    // line(this.x - 40, this.y + 40, this.x - 40, this.y + 260);
    // line(this.x + 540, this.y + 40, this.x + 540, this.y + 260);
    // line(this.x, this.y, this.x - 40, this.y + 40);
    // line(this.x - 40, this.y + 260, this.x, this.y + 300);
    // line(this.x + 500, this.y, this.x + 540, this.y + 40);
    // line(this.x + 500, this.y + 300, this.x + 540, this.y + 260);
    noStroke();
    fill(220, 220, 220);
    textSize(15);
    textAlign(LEFT);
    text(this.text, this.x, this.y + 40, 500, 220);
    textSize(14);
    if (this.effect === false) {
      fill(100, 100, 100);
    }
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 275, 500, 295);
  }

  clicked() {
    if (this.handler != null) {
      this.handler.activeTalk = this.next;
    }
  }
  changeNext(next, handler) {
    this.next = next;
    this.handler = handler;
  }
}
