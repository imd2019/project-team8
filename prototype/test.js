var t = 0;
var min = 0;
var h = 0;

function clock() {
  t++;
  if (t === 20) {
    min++;
    t = 0;
  }
  if (min === 60) {
    h++;
    min = 0;
  }
  if (h === 24 && min == 1) {
    h = 0;
    min = 1;
  }
}

function draw() {
  clear();
  clock();
  fill(200, 200, 200);
  textSize(50);
  textAlign(CENTER);
  text(h, 200, 200);
  text(min, 200, 250);

  stroke(100, 100, 100);
  line(100, 100, 200, 100);
}
