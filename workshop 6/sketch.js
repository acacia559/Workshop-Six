let font1;
let button;
let userInput;
let userLine;

let s = ''; 
let poem = [];

function preload () {
  font1 = loadFont ('IcelandWinterstorm.otf');
  userInput = createInput ();
  userInput.position (10, 10);
 button = createButton ('Add to poem');
 button.position (userInput.x + 170, userInput.y);
 button.mousePressed(newLine);
}

function setup() {
  createCanvas(400, 500);
  textFont(font1);
}

function draw() {
  background(220);
  text (s, 10, 50); 
  writePoem();
}

function newLine () {
  userLine = userInput.value();
  userInput.value(''); 
 poem.push(userLine);
}

function writePoem() {
  for (x = 0; x < poem.length; x++){
   text (poem[x], 10, 150 + x *20);
  
  }
}