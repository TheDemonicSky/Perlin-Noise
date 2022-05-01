const terrainValues = [];
const multiplier = 100;
let xOffset = 0;
let yOffset = 0;
const increment = 0.07;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);

  for (let y = 0; y < 60; y++) {
    terrainValues.push([]);
    xOffset = 0;
    for (let x = 0; x < 60; x++) {
      terrainValues[y][x] = map(
        noise(xOffset, yOffset),
        0,
        1,
        -multiplier,
        multiplier
      );
      xOffset = xOffset + increment;
    }
    yOffset = yOffset + increment;
  }
}

function draw() {
  background(0);

  stroke(255);
  noFill();
  rotateX(65);
  translate(-width / 2, -height / 2);
  for (let y = 0; y < 60; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < 60; x++) {
      vertex(x * 10, y * 10, terrainValues[x][y]);
      vertex(x * 10, (y + 1) * 10, terrainValues[x][y]);
    }
    endShape();
  }
}
