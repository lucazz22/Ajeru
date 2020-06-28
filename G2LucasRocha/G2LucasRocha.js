let sound, amplitude;

function preload() {
  sound = loadSound('assets/quarentena.mp3');
  minhaFonte = loadFont('assets/Andale.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  amplitude = new p5.Amplitude();
  textFont(minhaFonte);
  createEasyCam();
  document.oncontextmenu = function() {
    return false;
  }
}

function draw() {
  background(25, 25, 25);
  textAlign(CENTER);
  fill(255);
  textSize (35);
  text('Ajeru', 0, -150);
  textSize(20);
  text('aperte "enter" para ouvir', 0, -100);
  let level = amplitude.getLevel();
  let size = map(level, 0, 0.8, 50, 400);
  let cor = map(level, 0, 0.15, 0, 255);
  //print (level);
  push();
  lights();
  noStroke();
  fill(cor, 80, 80);
  translate(0, 0, 0);
  ellipsoid(size, size, size);
  pop(0);
  //}
}

function keyPressed() {
  if (keyCode===ENTER) { 
    if (sound.isPlaying() ) {
      sound.stop();
    } else { 
      sound.play();
    }
  }
}
