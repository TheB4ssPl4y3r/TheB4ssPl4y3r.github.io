let cols = 20;
let rows = 15;
let gridSize = 21;
let winWidth = cols * gridSize;
let winHeight = rows * gridSize;
let food = { x: 0, y: 0 };
let snake = {
  x: 0,
  y: 0,
  xSpeed: 0,
  ySpeed: 0,
  body: [],
};
let score = 0;
let gamePaused = false;
let gameOver = false;
let gameStarted = false;
let fps = 5;

// ====================
//        Food
// ====================

// Draw the food as
// a red square.
function drawFood() {
  let x = food.x * gridSize;
  let y = food.y * gridSize;
  fill(255, 255, 0);
  square(x, y, gridSize);
}

// Move the food to a
// random location.
function moveFood() {
  food.x = floor(random(cols));
  food.y = floor(random(rows));
}

// ====================
//        Snake
// ====================

// Reset the snake's data.
function resetSnake() {
  // Start at the center.
  snake.x = floor(cols / 2);
  snake.y = floor(rows / 2);
  // Move to the right.
  snake.xSpeed = 1;
  snake.ySpeed = 0;
  // Add an array to manage
  // the body.
  snake.body = [];

  // Create a head segment.
  let head = {
    x: snake.x,
    y: snake.y,
  };

  // Add the head to the body.
  snake.body.push(head);
}

// End the game when the
// snake collides an edge.
function checkEdges() {
  // Right edge.
  if (snake.x === cols) {
    gameOver = true;
    return;
  }
  // Left edge.
  if (snake.x === -1) {
    gameOver = true;
    return;
  }
  // Top edge.
  if (snake.y === -1) {
    gameOver = true;
    return;
  }
  // Bottom edge.
  if (snake.y === rows) {
    gameOver = true;
    return;
  }
}

// Move the snake forward.
function moveSnake() {
  snake.x = snake.x + snake.xSpeed;
  snake.y = snake.y + snake.ySpeed;
}

// Update the positions of the
// snake's body segments.
function updateBody() {
  // Update the end of the tail.
  for (let i = snake.body.length - 1; i > 0; i -= 1) {
    snake.body[i].x = snake.body[i - 1].x;
    snake.body[i].y = snake.body[i - 1].y;
  }

  // Update the head.
  snake.body[0].x = snake.x;
  snake.body[0].y = snake.y;
}

// Draw the snake.
function drawSnake() {
  fill(0, 255, 0);
  for (let segment of snake.body) {
    let x = segment.x * gridSize;
    let y = segment.y * gridSize;
    square(x, y, gridSize);
  }
}

// Update the snake's movement.
function changeDir(xSpeed, ySpeed) {
  snake.xSpeed = xSpeed;
  snake.ySpeed = ySpeed;
}

// Manage the snake's diet.
function checkFood() {
  if (snake.x === food.x && snake.y === food.y) {
    // Add a new body segment.
    let segment = { x: -1, y: -1 };
    snake.body.push(segment);

    // Update the score.
    score += 10;

    // Place the food in a
    // random location.
    moveFood();
  }
}

// End the game if the snake
// collides with its tail.
function checkSelf() {
  for (let i = 1; i < snake.body.length; i += 1) {
    let segment = snake.body[i];
    if (snake.x === segment.x && snake.y === segment.y) {
      gameOver = true;
      return;
    }
  }
}

// ====================
//      Controls
// ====================

// Directions: up, down, left, right.

function goUp() {
  snake.xSpeed = 0;
  snake.ySpeed = -1;
}

function goDown() {
  snake.xSpeed = 0;
  snake.ySpeed = 1;
}

function goLeft() {
  snake.xSpeed = -1;
  snake.ySpeed = 0;
}

function goRight() {
  snake.xSpeed = 1;
  snake.ySpeed = 0;
}

// Use arrow keys to control
// the snakes' motion.
function keyPressed() {
  if (keyCode === UP_ARROW) {
    goUp();
  }
  if (keyCode === DOWN_ARROW) {
    goDown();
  }
  if (keyCode === LEFT_ARROW) {
    goLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    goRight();
  }
  if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
    goUp();
  } else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
    goDown();
  } else if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    goLeft();
  } else if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
    goRight();
  }
}

// Start the game.
function startGame() {
  score = 0;
  gameStarted = true;
  gamePaused = false;
  if (gameOver === true) {
    resetSnake();
    gameOver = false;
  }
  loop();
}

// Pause the game.
function pauseGame() {
  gamePaused = true;
}

// ====================
//       Messages
// ====================

// Start message.
function displayStartMessage() {
  textSize(20);
  textAlign(CENTER);
  fill(255, 0, 0);
  text("Press ▶ to Start", width / 2, height / 2);
}

// End message.
function displayEndMessage() {
  background(0);
  textSize(50);
  textAlign(CENTER);
  fill(255, 0, 0);
  text('Game Over', width / 2, height / 2);
  
  textSize(20);
  fill(255);
  text('Score: ' + score, width / 2, height / 2 + 40);  // Display the score
  
  textSize(14);
  text('Press ▶ to Restart', width / 2, height / 2 + 60);
}