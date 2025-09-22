let fishX, fishY;
let fishSpeedX, fishSpeedY;

function setup() {
  createCanvas(600, 400);
  fishX = width / 2;
  fishY = height / 2;
  fishSpeedX = random(2, 5);
  fishSpeedY = random(2, 5);
}

function draw() {
  background(0, 150, 200); // blue water background
  moveFish();
  drawFish(fishX, fishY);
}

function moveFish() {
  fishX += fishSpeedX;
  fishY += fishSpeedY;

  // Bounce off edges
  if (fishX > width || fishX < 0) {
    fishSpeedX *= -1;
  }
  if (fishY > height || fishY < 0) {
    fishSpeedY *= -1;
  }
}

function drawFish(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 100, 100);

  // Body
  ellipse(0, 0, 50, 30);

  // Tail
  triangle(-25, 0, -40, -10, -40, 10);

  // Eye
  fill(0);
  ellipse(15, -5, 5, 5);
  pop();
}
