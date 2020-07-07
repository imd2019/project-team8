import { trainAnimation } from "./p5setup.js";

export default class Train {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   display() {
      image(trainAnimation, this.x, this.y, 500, 200);
    }
  
}