function SceneMain() {
  let textX = windowWidth / 2;
  let textY = windowHeight / 2;

  this.setup = function () {
    pixelDensity(.5);
    cols = width;
    rows = height;
    // The following line initializes a 2D cols-by-rows array with zeroes
    // in every array cell, and is equivalent to this Processing line:
    // current = new float[cols][rows];
    current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  };

  this.draw = function () {
    background("black");
    loadPixels();
    for (let i = 1; i < cols - 1; i++) {
      for (let j = 1; j < rows - 1; j++) {
        current[i][j] =
          (previous[i - 1][j] +
            previous[i + 1][j] +
            previous[i][j - 1] +
            previous[i][j + 1]) /
          2 -
          current[i][j];
        current[i][j] = current[i][j] * dampening;
        // Unlike in Processing, the pixels array in p5.js has 4 entries
        // for each pixel, so we have to multiply the index by 4 and then
        // set the entries for each color component separately.
        let index = (i + j * cols) * 4;
        pixels[index + 0] = current[i][j];
        pixels[index + 1] = current[i][j];
        pixels[index + 2] = current[i][j];
      }
    }
    updatePixels();

    let temp = previous;
    previous = current;
    current = temp;
    console.log(level);
    previous[mouseX][mouseY] = 500;

    if (level < width && level > 0) {
      let levelWidth = map(level, 0, width, 0, width);
      let levelHeight = map(level, 0, height, 0, height);
      console.log(mouseX);
  };

  push();
  textAlign(LEFT, TOP);
  text(
    "Ripples\nAnojan Santhakumar & Sebastian Åhman\nKreativ Programmering HT20\nSödertörns Högskola",
    10,
    10
  );
  pop();
  text("Main", textX, 20);

}

  this.mousePressed = function () {
    userStartAudio();
    //recorder();
    voice.play();
  };
}
