let winWidth = 400;
let winHeight = 300;
function setup() {
  // Create the canvas (adjust width and height as needed)
  let canvas = createCanvas(winWidth, winHeight);

  // Create the Game Boy emulator container
  let gameBoyEmulator = createDiv();
  gameBoyEmulator.id("game-boy-emulator");

  // Create the game container
  let gameContainer = createDiv();
  gameContainer.id("game-container");

  // Create the score container
  let scoreContainer = createDiv("Score: ");
  scoreContainer.id("score-container");

  //Create the score element in paragraph
  let scoreSpan = createP("0");
  scoreSpan.id("score");

  // Create the Game Boy text
  let gameBoyText = createDiv("GameBoy");
  gameBoyText.id("game-boy-text");

  //Add color to the gameboy text
  gameBoyText.style("color", "rgb(25 203 239 / 100%)");

  // Create the button container
  let buttonContainer = createDiv();
  buttonContainer.id("button-container");

  // Create the arrow buttons container
  let arrowButtons = createDiv();
  arrowButtons.id("arrow-buttons");

  // Create the left and right buttons container
  let leftRightButtons = createDiv();
  leftRightButtons.id("leftRightButton");

  // Create the action buttons container
  let actionButtons = createDiv();
  actionButtons.id("action-buttons");

  // Select the page's body element and
  // Return it wrapped in a p5.Element
  let body = select("body");

  // Add the gameboyEmulator to the body element
  body.child(gameBoyEmulator);

  // Add containers to the main container
  gameBoyEmulator.child(gameContainer);
  gameBoyEmulator.child(gameBoyText);
  gameBoyEmulator.child(buttonContainer);

  // Add elements to their respective containers
  scoreContainer.child(scoreSpan);
  gameContainer.child(scoreContainer);
  gameContainer.child(canvas);
  buttonContainer.child(arrowButtons);
  buttonContainer.child(actionButtons);

  // Set styles for the Game Boy emulator container
  gameBoyEmulator.style("background-color", "#8b8b8b");
  gameBoyEmulator.style("border", "10px solid #000");
  gameBoyEmulator.style("border-radius", "10px");
  gameBoyEmulator.style("padding", "20px");
  gameBoyEmulator.style("box-shadow", "0 0 20px rgba(0, 0, 0, 0.8)");

  // Set styles for the button container
  buttonContainer.style("display", "flex");
  buttonContainer.style("align-items", "center");
  buttonContainer.style("justify-content", "space-between");
  buttonContainer.style("margin-top", "20px");

  // Set styles for the arrow buttons container
  arrowButtons.style("display", "flex");
  arrowButtons.style("flex-direction", "column");
  arrowButtons.style("align-items", "center");

  // Set styles for the action buttons container
  actionButtons.style("display", "flex");
  actionButtons.style("align-items", "center");

  // Add styles
  scoreContainer.style("position", "absolute");
  scoreContainer.style("margin-left", "340px");
  scoreContainer.style("color", "#fff");
  scoreContainer.style("margin-top", "5px");

  // Add styles
  gameBoyText.style("margin", "10px 145px");
  gameBoyText.style("font-size", "25px");
  gameBoyText.style("color", "#fff");
  gameBoyText.style("background-color", "#2A9CB9");
  gameBoyText.style("padding", "5px");
  gameBoyText.style("border-radius", "5px");
}
function draw() {
  background(51);
}