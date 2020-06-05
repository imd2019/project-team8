import Phone from "./phone.js";
import Player from "./player.js";

let phone = new Phone(750, 450, 100, 160);
let player = new Player(10, 510, 100, 100);
function mouseClicked() {
  phone.mouseClicked();
  player.mouseClicked();
}
window.mouseClicked = mouseClicked;
function draw() {
  clear();
  background(30, 30, 30);
  phone.display();
  player.display();
}
window.draw = draw;
