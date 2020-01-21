/* eslint-disable quotes */
/* eslint-disable indent */

// DRILL NUMBER 1
function sheep(num) {
  if (num === 0) {
    return console.log("All sheep jumped over the fence");
  }

  console.log(`${num}: Another sheep jumps over the fence`);
  sheep(num - 1);
}

// DRILL NUMBER 2

function powerCalculator(baseInt, expInt) {
  if (expInt === 0) {
    return 1;
  }
  if (expInt < 0) {
    return "exponent should be >= 0";
  }

  let result = baseInt;
  return result * powerCalculator(baseInt, expInt - 1);
}

// DRILL NUMBER 3

function reverseMe(str) {
  if (str.length === 0) {
    return "";
  }

  return reverseMe(str.slice(1)) + str[0];
}

// DRILL NUMBER 4

function triangulateMe(n) {
  if (n === 1) {
    return 1;
  }

  return n + triangulateMe(n - 1);
}

// DRILL NUMBER 5
function splitter(str) {
  if (!str.length) {
    return [];
  }

  const char = str.indexOf("/"); //2
  const charUp = char + 1;
  const strArr = str.slice(char); //20

  return [strArr, ...splitter(str.slice(charUp))]; //20
}

//DRILL NUMBER 6

function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

let maze = [
  [" ", " ", " ", "*", " ", " ", " "], // index 0 // maze[0].length-1
  ["*", "*", " ", "*", " ", "*", " "], // index 1
  [" ", " ", " ", " ", " ", " ", " "], // index 2
  [" ", "*", "*", "*", "*", "*", " "], // index 3
  [" ", " ", " ", " ", " ", " ", "e"] // index 4
];

function mazeTester(across, down, direction) {
  let level = maze[down];
  if (level[across] === "*") {
    return "game over";
  }
  if (level[across] === "e") {
    return "You Win!";
  }
  if (direction.length === 0) {
    return "";
  }

  if (direction[0] === "R") {
    return mazeTester(across++, down, direction.slice(1));
  }
  if (direction[0] === "L") {
    return mazeTester(across--, down, direction.slice(1));
  }
  if (direction[0] === "D") {
    return mazeTester(across, down++, direction.slice(1));
  }
  if (direction[0] === "U") {
    return mazeTester(across, down--, direction.slice(1));
  }
}
