import { hdaAbspann } from "./p5setup.js";

export default class Credits {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.i = 0;
  }
  display() {
    this.i++;
    //Titel
    textSize(30);
    fill(220, 220, 220);
    noStroke();
    text("EYE TO EYE", this.x, this.y - 300);
    text("Hochschule Darmstadt", this.x + 50, this.y - 100);
    text("TECHNIK & DESIGN", this.x, this.y + 400);
    text("MUSIC & SOUND", this.x, this.y + 150);
    text("BILDER & ILLUSTRATIONEN", this.x, this.y + 700);
    text("DANKE!", this.x + 100, this.y + 1000);
    //Untertitel
    textSize(20);
    text("Interactive Media Design", this.x + 50, this.y - 50);
    text("2020", this.x + 50, this.y);
    text("Youtube", this.x, this.y + 200);
    text("https://incompetech.filmmusic.io/", this.x, this.y + 250);
    text("Eva Haugrund", this.x, this.y + 450);
    text("Lisa Jochem", this.x, this.y + 500);
    text("Afeni Sodatonou", this.x, this.y + 550);
    text("Marie-Lou Weymann", this.x, this.y + 600);
    text("Freepik", this.x, this.y + 750);
    text("upklayk", this.x, this.y + 780);
    text("vectorpocket", this.x, this.y + 780);
    text("pch.vector", this.x, this.y + 780);
    text("vectorpouch", this.x, this.y + 780);
    // text("", this.x, this.y + 780);
    //Timer
    if (this.i >= 700) {
      image(hdaAbspann, 15, 15, 1300, 600, 0, 0, 1920, 900);
    }
  }
}

// hdaAbspann = new Abspann(100, 600);

// function draw() {
//   // background(60, 60, 60);
//   // abspann();
//   hdaAbspann.display();
//   this.y = this.y - 3;
//   // i++;
//   if (i <= 5 && i >= 2) {
//     // if (i <= 1) {
//     i++;
//     image(hdaAbspann, 100, 100);
//     i = 0;
//   }
// }
