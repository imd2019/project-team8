import { carAnimation } from "./p5setup.js";

export default class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   display() {
      image(carAnimation, this.x, this.y, 500, 200);
    }
  
}

