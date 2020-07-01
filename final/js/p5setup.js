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
  partnerVideo = loadImage("png/objects/partnervidoe.png");
  // //Charaktere
  // mentor = loadImage("png/character/mentor.png");

  //gesprochner Text

  mentorSound1 = loadSound("sound/mentor/tur.mp3");

  //Schriftart
  myFont = loadFont("font/Hack-Bold.ttf");
}
window.preload = preload;

function setup() {
  sketch.createCanvas(windowWidth, windowHeight);
  sketch.frameRate(30);
  textFont(myFont);
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
};
export {
  beamer,
  characterButton,
  phoneButtonImage,
  characterButtonEffect,
  phoneButtonImageEffect,
  phoneImage,
  phoneImageEffect,

  mentorSound1,
  hologram,
  phoneBig,
  partnerFacetime,
  partnerVideo,
};
export { myFont };
// export { mentor };
