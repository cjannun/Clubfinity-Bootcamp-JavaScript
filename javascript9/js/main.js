// Conditionals: Ternary Operator

// syntax
// condition ? ifTrue : ifFalse;

let playerOne = "scissors";
let computer = "rock"
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "playerOne wins!";
console.log(result);