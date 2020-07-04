import { form } from "./p5setup.js";
export default class Paper {
  constructor() {
    this.name = [];
    this.ok = false;
    this.effect = false;
    this.t = 0;
    this.line = "|";
  }

  keyPressed() {
    if (keyCode === 8) {
      this.name.pop();
    }
    if (
      (keyCode >= 65 && keyCode <= 90) ||
      keyCode === 192 ||
      keyCode === 222 ||
      keyCode === 186 ||
      keyCode === 32
    ) {
      this.name.push(key);
    }
  }
  hitTest(x, y) {
    if (x > 750 && x < 780 && y > 530 && y < 560) {
      return true;
    } else {
      return false;
    }
  }
  mouseMoved() {
    if (this.hitTest(mouseX, mouseY)) {
      this.effect = true;
    } else {
      this.effect = false;
    }
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.ok = true;
    }
  }

  drawLine() {
    this.t++;
    if (this.t >= 30) {
      this.t = 0;
    }
  }

  draw() {
    // fill(220, 220, 220);
    // stroke(30, 30, 30);
    // strokeWeight(3);
    // rect(455, 50, 400, 550);
    // rect(800, 565, 40, 30);
    image(form, 400, 15, 500, 700);
    fill(30, 30, 30);
    noStroke();
    textSize(18);
    textAlign(LEFT);
    this.drawLine();
    // text("Name:", 470, 100);
    if (this.t <= 15) {
      text(this.name.join("") + this.line, 580, 492);
    } else {
      text(this.name.join(""), 580, 492);
    }

    if (this.effect === false) {
      fill(150, 150, 150);
    }
    text("OK", 760, 545);
    //770,550
  }
}
