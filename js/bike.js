import { bikeAnimation } from "./p5setup.js";

export default class Bike {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   display() {
      image(bikeAnimation, this.x, this.y, 500, 200);
    }
  
}