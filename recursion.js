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
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"]
];

function mazeTester(maze, column, row, direction) {
  //base case
  if (maze[column][row] === "e") {
    return direction;
  }
  //failing paths
  if (
    maze[column][row] === "*" ||
    column > maze.length ||
    row > maze[row].length ||
    column < 0 ||
    row < 0
  ) {
    return false;
  }

  if (maze[column][row] === "") {
    if (maze[column][row + 1] === "*") {
      return "D" + mazeTester(maze, column++, row);
    }
    return "R" + mazeTester(maze, column, row++);
  }
}

//DRILL 10

function anagrams(str, num = 0) {
  //base case

  if (str.length === num) {
    return [str];
  }
  const firstLetter = str[0]; //e
  const remLetters = str.slice(1); //ast

  //recursive case
  num++;
  return firstLetter + anagrams(remLetters.concat(firstLetter), num);
}
