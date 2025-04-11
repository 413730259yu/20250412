let circles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // 設定畫布為最底層
  background('#fdf0d5');

  generateCircles();
}

function draw() {
  background('#fdf0d5');
  let sizeFactor = map(mouseX, 0, width, 0.5, 2);

  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateCircles(); // 視窗調整時重新分佈圓圈
}

function generateCircles() {
  circles = [];
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(windowWidth),
      y: random(windowHeight),
      size: random(40, 120),
      color: color(random(255), random(255), random(255))
    });
  }
}
