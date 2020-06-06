import Click from "./click.js";

export default class Talking extends Click {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.text = text;
  }
  display() {
    noFill();
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 20);
    noStroke();
    fill(220, 220, 220);
    textAlign(LEFT);
    textSize(15);
    this.text =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    text(
      this.text,
      this.x + 15,
      this.y + 15,
      this.width - 15,
      this.height - 15
    );
  }
  clicked() {
    console.log("Talking");
  }
}
