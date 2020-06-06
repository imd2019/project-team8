import Phone from "./phone.js";
import Player from "./player.js";
import Talking from "./talking.js";

let phone = new Phone(750, 450, 100, 160);
let player = new Player(10, 510, 100, 100);
let talking = new Talking(150, 500, 550, 100);
function mouseClicked() {
  phone.mouseClicked();
  player.mouseClicked();
  talking.mouseClicked();
}
window.mouseClicked = mouseClicked;
function draw() {
  clear();
  background(30, 30, 30);
  phone.display();
  player.display();
  talking.display();
}
window.draw = draw;
