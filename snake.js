const panel_border = 'black';
const panel_background = "white";
const snake_col = 'red';
const snake_border = 'darkblue';

let snake = [{
    x: 200,
    y: 200
}, {
    x: 190,
    y: 200
}, {
    x: 180,
    y: 200
}, {
    x: 170,
    y: 200
}, {
    x: 160,
    y: 200
}]

let score = 0;
let changing_direction = false;
// Hor velocity
let food_x;
let food_y;
let dx = 10;
// Vert velocity
let dy = 0;


// Get the canvas element
const snakepanel = document.getElementById("snakepanel");
// Return a two dimensional drawing context
const snakepanel_ctx = snakepanel.getContext("2d");
// Start game
main();

generate_food();

document.addEventListener("keydown", change_direction);

// main function called repeatedly to keep the game running
function main() {

    if (has_game_ended()) return;

    changing_direction = false;
    setTimeout(function onTick() {
        clear_board();
        drawFood();
        move_snake();
        drawSnake();
        // Repeat
        main();
    }, 100)
}

// draw a border around the canvas
function clear_board() {
    //  Select the colour to fill the drawing
    snakepanel_ctx.fillStyle = panel_background;
    //  Select the colour for the border of the canvas
    snakepanel_ctx.strokestyle = panel_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakepanel_ctx.fillRect(0, 0, snakepanel.width, snakepanel.height);
    // Draw a "border" around the entire canvas
    snakepanel_ctx.strokeRect(0, 0, snakepanel.width, snakepanel.height);
}

// Draw the snake on the canvas
function drawSnake() {
    // Draw each part
    snake.forEach(drawSnakePart)
}

function drawFood() {
    snakepanel_ctx.fillStyle = 'yellow';
    snakepanel_ctx.strokestyle = 'darkgreen';
    snakepanel_ctx.fillRect(food_x, food_y, 10, 10);
    snakepanel_ctx.strokeRect(food_x, food_y, 10, 10);
}

// Draw one snake part
function drawSnakePart(snakePart) {

    // Set the colour of the snake part
    snakepanel_ctx.fillStyle = snake_col;
    // Set the border colour of the snake part
    snakepanel_ctx.strokestyle = snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    snakepanel_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Draw a border around the snake part
    snakepanel_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function has_game_ended() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakepanel.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakepanel.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function random_food(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function generate_food() {
    // Generate a random number the food x-coordinate
    food_x = random_food(0, snakepanel.width - 10);
    // Generate a random number for the food y-coordinate
    food_y = random_food(0, snakepanel.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == food_x && part.y == food_y;
        if (has_eaten) generate_food();
    });
}

function change_direction(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    // Prevent the snake from reversing

    if (changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

function move_snake() {
    // Create the new Snake's head
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    const food_eaten = snake[0].x === food_x && snake[0].y === food_y;
    if (food_eaten) {
        // Increase score
        score += 10;
        // Display score on screen
        document.getElementById('score').innerHTML = score;
        // Generate new food location
        generate_food();
    } else {
        // Remove the last part of snake body
        snake.pop();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = '';
    pTag.appendChild(newVal);
});