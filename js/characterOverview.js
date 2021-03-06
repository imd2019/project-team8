import { characteroverview } from "./p5setup.js";

export default class CharacterOverview {
  constructor(x, y, name, button, text) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.button = button;
    this.text = text;
  }
  display() {
    image(characteroverview, 331, 159, 654, 292);
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
    // stroke(180, 0, 125);
    // strokeWeight(6);
    // line(this.x, this.y, this.x + 500, this.y);
    // line(this.x, this.y + 300, this.x + 500, this.y + 300);
    // line(this.x - 40, this.y + 40, this.x - 40, this.y + 260);
    // line(this.x + 540, this.y + 40, this.x + 540, this.y + 260);
    // line(this.x, this.y, this.x - 40, this.y + 40);
    // line(this.x - 40, this.y + 260, this.x, this.y + 300);
    // line(this.x + 500, this.y, this.x + 540, this.y + 40);
    // line(this.x + 500, this.y + 300, this.x + 540, this.y + 260);
    noStroke();
    if (this.button.effect === true) {
      fill(220, 220, 220);
    } else {
      fill(100, 100, 100);
    }
    textSize(20);
    textAlign(CENTER);
    text("x", this.x + 613, this.y + 25);
    textAlign(LEFT);
    fill(220, 220, 220);
    textSize(20);
    text("ID  H5-B783-T29CV76", this.x + 200, this.y + 50);
    textSize(15);
    text("Name: " + this.name.name.join(""), this.x + 40, this.y + 80);
    text("Freundin: Pastell", this.x + 40, this.y + 150);
    text("Aktuelle Aufgabe:\n\n" + this.text, this.x + 40, this.y + 220);
  }
}
