import { hdaAbspann } from "./p5setup.js";
let i = 0;

// let x = 100;
// let y = 600;

class Abspann {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    textSize(30);
    fill(220, 220, 220);
    text("EYE TO EYE", this.x + 50, this.y - 300);
    text("Hochschule Darmstadt", this.x, this.y - 100);
    text("TECHNIK & DESIGN", this.x, this.y + 400);
    text("MUSIC & SOUND", this.x, this.y + 150);
    text("BILDER & ILLUSTRATIONEN", this.x, this.y + 700);
    text("DANKE!", this.x + 100, this.y + 1000);
    textSize(20);
    text("Interactive Media Design", this.x + 50, this.y - 50);
    text("2020", this.x + 150, this.y);
    text("Youtube", this.x, this.y + 200);
    text("https://incompetech.filmmusic.io/", this.x, this.y + 250);
    text("Eva Haugrund", this.x, this.y + 450);
    text("Lisa Jochem", this.x, this.y + 500);
    text("Afeni Sodatonou", this.x, this.y + 550);
    text("Marie-Lou Weymann", this.x, this.y + 600);
    text("Freepik", this.x, this.y + 750);
  }
}

hdaAbspann = new Abspann(100, 600);

function draw() {
  background(60, 60, 60);
  abspann();
  this.y = this.y - 3;
  // i++;
  if (i <= 5 && i >= 2) {
    // if (i <= 1) {
    i++;
    image(hdaAbspann, 100, 100);
    i = 0;
  }
}
