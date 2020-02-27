let moon_scale = 1;
let increment = 0.001;

function setup() { 
  let myCanvas = createCanvas(500, 500);
  myCanvas.parent("canvasDiv");
    background('#b5ae96');

  let c = color('#d1000e'); // Define color 'c'
  fill(c); // Use color variable 'c' as fill color
  noStroke(); // Don't draw a stroke around shapes
  rect(0, 50, 500, 60);

  c = color('#a13003');
  fill(c);
  rect(0, 110, 500, 120);

   c = color('#65a3bf');
  fill(c);
  rect(0, 290, 500, 70);

  c = color('#debb0d');
  fill(c);
  rect(0, 360, 500, 30);

  c = color('#fafaf0');
  fill(c);
  ellipse(250, 240, 300*moon_scale, 300*moon_scale);


  c = color('#030530');
  fill(c);
  ellipse(230, 240, 260*moon_scale, 290*moon_scale);
  
  moon_scale = moon_scale + increment;

  if (moon_scale >= 1.1) {
  	increment = -.001;
  }

  if (moon_scale <= 0) {
  	increment = .001;
  }
} 

function draw() { 


}