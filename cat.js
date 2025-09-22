function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  fill(110)
  ellipse(200,150,100,100)
  
  fill(110)
  ellipse(200,250,150,150)
  
   triangle(150,130, 160, 80, 190, 100);
  triangle(237,120,240,70,200,100)
  
  // Draw the cat's tail using the curve() function
  // The first two points (x1, y1, x2, y2) and the last two points (x7, y7, x8, y8)
  // are "control" points that define the start and end of the curve.
  // The points in the middle (x3, y3, x4, y4) are the points the curve passes through.
  curve(
    300, 0, // Control point 1
    190, 300, // Start of the visible curve
    20, 100, // Middle point
    380, 350, // End of the visible curve
    33, 350, // Control point 2
  );

}
