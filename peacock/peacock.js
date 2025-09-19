function drawPeacock() {
  // Peacock body
  fill(0, 100, 200);
  ellipse(250, 300, 80, 120); // body
  ellipse(250, 220, 50, 50);  // head

  // Beak
  fill(255, 150, 0);
  triangle(275, 220, 300, 230, 275, 240);

  // Eye
  fill(255);
  ellipse(240, 215, 15, 15);
  fill(0);
  ellipse(240, 215, 7, 7);

  // Feathers
  fill(0, 150, 0);
  ellipse(250, 120, 60, 100);
  ellipse(200, 140, 60, 100);
  ellipse(300, 140, 60, 100);
  ellipse(160, 180, 60, 100);
  ellipse(340, 180, 60, 100);

  // Tail feather "eyes"
  fill(0, 100, 200);
  ellipse(250, 120, 20, 20);
  ellipse(200, 140, 20, 20);
  ellipse(300, 140, 20, 20);
  ellipse(160, 180, 20, 20);
  ellipse(340, 180, 20, 20);
}
