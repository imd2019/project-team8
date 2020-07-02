let sketch = new p5();
let width = windowWidth;
let height = windowHeight;
//Hintergünde
let laboratoryBackground;
let messyRoomBackground;
let messyRoomBackgrundWindow;
let messyRoomBackgroundDoor;
let cityBackground;
let officeBackground;
let hirerBackground;
let clubBackground;
let officewindow;
let officecamera;

//Gegenstände
let beamer;
let characterButton;
let phoneButtonImage;
let characterButtonEffect;
let phoneButtonImageEffect;
let phoneImage;
let phoneImageEffect;
let hologram;

//Handy_groß
let phoneBig;
let partnerFacetime;
let partnerVideo;

// Charaktere
// let mentor;

//gesprochener Text
let mentorSound1;
let mentorSound2;
let mentorSound3;
let mentorSound4;
let mentorSound5; //andere version von 4
let mentorSound6;
let mentorSound7;
let mentorSound8;
let mentorSound9;
let mentorSound10;
let mentorSound11;
let mentorSound12;
let mentorSound13;
let mentorSound14;
let mentorSound15;
let mentorSound16;
let mentorSound17;
let mentorSound18;
let mentorSound19;
let mentorSound20;
let mentorSound21;
let mentorSound22;
let mentorSound23;

//Schriftart Hack
let myFont;

function preload() {
  //Hintergründe
  laboratoryBackground = loadImage("png/laboratory.png");
  messyRoomBackground = loadImage("png/messyRoom.png");
  messyRoomBackgrundWindow = loadImage("png/messyroom-window.png");
  messyRoomBackgroundDoor = loadImage("png/messyroom-door.png");
  hirerBackground = loadImage("png/messyRoom-hirer.png");
  cityBackground = loadImage("png/city.png");
  officeBackground = loadImage("png/office-head.png");
  officewindow = loadImage("png/office-window.png");
  officecamera = loadImage("png/office-camera.png");
  clubBackground = loadImage("png/club.png");

  //Gegenstände
  beamer = loadImage("png/objects/beamer.png");
  characterButton = loadImage("png/objects/character1.png");
  phoneButtonImage = loadImage("png/objects/phone1.png");
  characterButtonEffect = loadImage("png/objects/character2.png");
  phoneButtonImageEffect = loadImage("png/objects/phone2.png");
  phoneImage = loadImage("png/objects/phonetable1.png");
  phoneImageEffect = loadImage("png/objects/phonetable2.png");
  hologram = loadImage("png/objects/hologram1.png");
  phoneBig = loadImage("png/objects/phonebig1.png");
  partnerFacetime = loadImage("png/objects/partnerfacetime.png");
  partnerVideo = loadImage("png/objects/partnervideo.png");
  // //Charaktere
  // mentor = loadImage("png/character/mentor.png");

  //gesprochner Text

  mentorSound1 = loadSound("sound/mentor/mentorsound1.mp3");
  mentorSound2 = loadSound("sound/mentor/mentorsound2.mp3");
  mentorSound3 = loadSound("sound/mentor/mentorsound3.mp3");
  mentorSound4 = loadSound("sound/mentor/mentorsound4.mp3");
  mentorSound5 = loadSound("sound/mentor/mentorsound5.mp3"); //andere version von 4
  mentorSound6 = loadSound("sound/mentor/mentorsound6.mp3");
  mentorSound7 = loadSound("sound/mentor/mentorsound7.mp3");
  mentorSound8 = loadSound("sound/mentor/mentorsound8.mp3");
  mentorSound9 = loadSound("sound/mentor/mentorsound9.mp3");
  mentorSound10 = loadSound("sound/mentor/mentorsound10.mp3");
  mentorSound11 = loadSound("sound/mentor/mentorsound11.mp3");
  mentorSound12 = loadSound("sound/mentor/mentorsound12.mp3");
  mentorSound13 = loadSound("sound/mentor/mentorsound13.mp3");
  mentorSound14 = loadSound("sound/mentor/mentorsound14.mp3");
  mentorSound15 = loadSound("sound/mentor/mentorsound15.mp3");
  mentorSound16 = loadSound("sound/mentor/mentorsound16.mp3");
  mentorSound17 = loadSound("sound/mentor/mentorsound17.mp3");
  mentorSound18 = loadSound("sound/mentor/mentorsound18.mp3");
  mentorSound19 = loadSound("sound/mentor/mentorsound19.mp3");
  mentorSound20 = loadSound("sound/mentor/mentorsound20.mp3");
  mentorSound21 = loadSound("sound/mentor/mentorsound21.mp3");
  mentorSound22 = loadSound("sound/mentor/mentorsound22.mp3");
  mentorSound23 = loadSound("sound/mentor/mentorsound23.mp3");

  //Schriftart
  myFont = loadFont("font/Hack-Bold.ttf");
}
window.preload = preload;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);
  textFont(myFont);
  //mentorSound1.play();
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);

export {
  laboratoryBackground,
  messyRoomBackground,
  messyRoomBackgrundWindow,
  messyRoomBackgroundDoor,
  hirerBackground,
  cityBackground,
  officeBackground,
  clubBackground,
  officecamera,
  officewindow,
};
export {
  beamer,
  characterButton,
  phoneButtonImage,
  characterButtonEffect,
  phoneButtonImageEffect,
  phoneImage,
  phoneImageEffect,
  hologram,
  phoneBig,
  partnerFacetime,
  partnerVideo,
};
export { myFont };
// export { mentor };

//sound
export {
  mentorSound1,
  mentorSound2,
  mentorSound3,
  mentorSound4,
  mentorSound5, //andere version von 4
  mentorSound6,
  mentorSound7,
  mentorSound8,
  mentorSound9,
  mentorSound10,
  mentorSound11,
  mentorSound12,
  mentorSound13,
  mentorSound14,
  mentorSound15,
  mentorSound16,
  mentorSound17,
  mentorSound18,
  mentorSound19,
  mentorSound20,
  mentorSound21,
  mentorSound22,
  mentorSound23,
};
