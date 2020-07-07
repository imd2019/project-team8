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
    textAlign(CENTER);
    text("EYE TO EYE", this.x, this.y - 300);
    text("Hochschule Darmstadt", this.x, this.y - 100);
    text("TECHNIK & DESIGN", this.x, this.y + 150);
    text("MUSIC & SOUND", this.x, this.y + 500);
    text("BILDER & ILLUSTRATIONEN", this.x, this.y + 1800);
    text("DANKE!", this.x, this.y + 2600);
    //Untertitel
    textSize(20);
    text("Interactive Media Design", this.x, this.y - 50);
    text("2020", this.x, this.y);
    //Technik & Design
    text("Eva Haugrund", this.x, this.y + 200);
    text("Lisa Jochem", this.x, this.y + 250);
    text("Afeni Sodatonou", this.x, this.y + 300);
    text("Marie-Lou Weymann", this.x, this.y + 350);
    //Music & Sound
    text(
      "Kris Dekaro - Awake via \nhttps://www.youtube.com/watch?v=J1TrbHgyhEE",
      this.x,
      this.y + 600
    );
    text(
      " Blue Moon - Cassette Tape via \nhttps://www.youtube.com/watch?v=9lO_31BP7xY&t=1s",
      this.x,
      this.y + 700
    );
    text("https://incompetech.filmmusic.io/", this.x, this.y + 800);
    text(
      " FBI open up via \nhttps://www.myinstants.com/instant/fbi-open-up-3322/",
      this.x,
      this.y + 900
    );
    text(
      "Übergang in die Parallelwelt via \nhttps://www.zapsplat.com/music/lo-fi-glitch-1/",
      this.x,
      this.y + 1000
    );
    text(
      "Karl Casey @ White Bat Audio- Night Crawler via \nhttps://www.youtube.com/watch?v=25Mcl0aTY5",
      this.x,
      this.y + 1100
    );
    text("Cassette Tape by Blue Moon", this.x, this.y + 1200);
    text(
      "V.I.P.N - Cyberpunk- Futuristic Wave Instrumental via \nhttps://www.youtube.com/watch?v=E9WewH9HXMA",
      this.x,
      this.y + 1300
    );
    text(
      "Eva – The End via \nhttps://youtu.be/zmynVSBSLI0",
      this.x,
      this.y + 1400
    );
    text(
      " Klingeln der Haustüre via \nhttps://www.zapsplat.com/music/doorbell-ring-ding-hold-then-dong/",
      this.x,
      this.y + 1500
    );
    text(
      "Sound der Sicherheitstür via \nhttps://www.zapsplat.com/music/science-fiction-door-open-electronic-whirr/",
      this.x,
      this.y + 1600
    );
    //Bilder
    text(
      "Hintergünde via Freepik (https://www.freepik.com):",
      this.x,
      this.y + 1850
    );
    text("upklayk", this.x, this.y + 1900);
    text("vectorpocket", this.x, this.y + 1950);
    text("pch.vector", this.x, this.y + 2000);
    text("vectorpouch", this.x, this.y + 2050);
    // text("", this.x, this.y + 780);
    //Timer
    if (this.i >= 1000) {
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
