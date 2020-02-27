function setup() { 

  var x_offset_slider = document.getElementById("xOffsetRange");
  var y_offset_slider = document.getElementById("yOffsetRange");

  x_offset_slider.oninput = function() {
    //output.innerHTML = this.value;
    // slider.value
  }

  y_offset_slider.oninput = function() {

  }

  let w = 460;
  let h = 400;
  let myCanvas = createCanvas(w, h);
  myCanvas.parent("canvasDiv");
  myCanvas.background('#E2DAB0');

  let x_offset = 0;
  let y_offset = 0;
  let tri_width = 100;

  let x1 = x_offset;
  let y1 = 0;

  let x2 = x_offset + tri_width;
  let y2 = 0;

  let x3 = tri_width/2 + x_offset;
  let y3 = 40;

  let x4 = tri_width/2 + x_offset;
  let y4 = y3 - 80;

  function updateTriangleCoords() {
    x1 = x_offset;
    y1 = y_offset;

    x2 = x_offset + tri_width;
    y2 = y_offset;

    x3 = tri_width/2 + x_offset;
    y3 = 40 + y_offset;

    x4 = tri_width/2 + x_offset;
    y4 = y3 - 81;
  }

} 

function draw() { 

  console.log(x_offset_slider.value);
  let c = color('#E0BB35'); // Define color 'c'
  fill(c);
  noStroke();

  for (let i = 0; i < 4; i++) {
    x_offset = 0;
    updateTriangleCoords();

    for (let j = 0; j < 5; j++) {

        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        x_offset = x_offset + 90;
        updateTriangleCoords();
    }
    y_offset = y_offset + 120;
    updateTriangleCoords();
  }


  c = color('#141C38'); // Define color 'c'
  fill(c);
  noStroke();

  y_offset = 40;
  for (let i = 0; i < 4; i++) {
    x_offset = 0;
    updateTriangleCoords();

    for (let j = 0; j < 5; j++) {

        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        x_offset = x_offset + 90;
        updateTriangleCoords();
    }
    y_offset = y_offset + 120;
    updateTriangleCoords();
  }

  c = color('#AC3E1B'); // Define color 'c'
  fill(c);
  noStroke();

  y_offset = 80;
  for (let i = 0; i < 4; i++) {
    x_offset = 0;
    updateTriangleCoords();

    for (let j = 0; j < 5; j++) {

        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        x_offset = x_offset + 90;
        updateTriangleCoords();
    }
    y_offset = y_offset + 120;
    updateTriangleCoords();
  }
}