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
  let scoreSpan = createP("0");
  scoreSpan.id("score");

  // Create the Game Boy text
  let gameBoyText = createDiv("GameBoy");
  gameBoyText.id("game-boy-text");
  // Add styles
  gameBoyText.style("margin", "10px 145px");
  gameBoyText.style("font-size", "25px");
  gameBoyText.style("color", "white");
  gameBoyText.style("background-color", "#0077b6");
  gameBoyText.style("padding", "5px");
  gameBoyText.style("border-radius", "5px");

  // Create the button container
  let buttonContainer = createDiv();
  buttonContainer.id("button-container");

  // Create the arrow buttons container
  let arrowButtons = createDiv();
  arrowButtons.id("arrow-buttons");

  // Create an up button
  let upButton = createButton("▲");
  // Set its ID
  upButton.id("up");
  // Set its styles
  upButton.style("color", "white");
  upButton.style("background-color", "red");
  upButton.style("width", "40px");
  upButton.style("height", "40px");
  upButton.style("margin-bottom", "10px");
  upButton.style("border-radius", "5px");
  arrowButtons.child(upButton);

  // Create the container for the left and right buttons
  let leftRightContainer = createDiv();
  arrowButtons.child(leftRightContainer);

  // Create the left button
  let leftButton = createButton("◀");
  // Set its ID
  leftButton.id("left");
  // Set its styles
  leftButton.style("color", "white");
  leftButton.style("background-color", "red");
  leftButton.style("width", "40px");
  leftButton.style("height", "40px");
  leftButton.style("margin-right", "30px");
  leftButton.style("border-radius", "5px");
  // Add it to the leftRightContainer
  leftRightContainer.child(leftButton);

  // Create the right button
  let rightButton = createButton("▶");
  // Set its ID
  rightButton.id("right");
  // Set its styles
  rightButton.style("color", "white");
  rightButton.style("background-color", "red");
  rightButton.style("width", "40px");
  rightButton.style("height", "40px");
  rightButton.style("margin-left", "5px");
  rightButton.style("border-radius", "5px");
  // Add it to the leftRightContainer
  leftRightContainer.child(rightButton);

  // Create the down button
  let downButton = createButton("▼");
  // Set its ID
  downButton.id("down");
  // Set its styles
  downButton.style("color", "white");
  downButton.style("background-color", "red");
  downButton.style("width", "40px");
  downButton.style("height", "40px");
  downButton.style("margin-top", "10px");
  downButton.style("border-radius", "5px");
  arrowButtons.child(downButton);

  // Create the action buttons container
  let actionButtons = createDiv();
  actionButtons.id("action-buttons");

  // Create the play button
  let playButton = createButton("▶");
  // Set its ID
  playButton.id("play");
  // Set its styles
  playButton.style("background-color", "blue");
  playButton.style("color", "white");
  playButton.style("width", "60px");
  playButton.style("height", "60px");
  playButton.style("font-size", "24px");
  // Make it a circle
  playButton.style("border-radius", "50%");
  // Add spacing
  playButton.style("margin-right", "10px");
  actionButtons.child(playButton);

  // Create the pause button
  let pauseButton = createButton("❚❚");
  // Set its ID
  pauseButton.id("pause");
  // Set its styles
  pauseButton.style("background-color", "blue");
  pauseButton.style("color", "white");
  pauseButton.style("width", "60px");
  pauseButton.style("height", "60px");
  pauseButton.style("font-size", "24px");
  // Make it a circle
  pauseButton.style("border-radius", "50%");
  actionButtons.child(pauseButton);

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
  scoreContainer.style("margin-top", "30px");
  
  scoreSpan.style("position", "absolute");
  scoreSpan.style("margin-left", "320px");
  scoreSpan.style("color", "#fff");
  scoreSpan.style("margin-top", "70px");

  // Add elements to their respective containers
  gameContainer.child(canvas);
  buttonContainer.child(arrowButtons);
  buttonContainer.child(actionButtons);

  // Add containers to the main container
  gameBoyEmulator.child(gameContainer);
  gameBoyEmulator.child(gameBoyText);
  gameBoyEmulator.child(buttonContainer);

  // Add the gameBoyEmulator to the sketch
  let body = select("body");
  // Add emulator as the first child
  // element in the page's body.
  body.child(gameBoyEmulator);
}

function draw() {
  background(51);
}