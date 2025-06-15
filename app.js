const boxes = document.querySelectorAll(".box");

let turnX = true;

boxes.forEach((box) => {
  box.addEventListener(
    "click",
    () => {
      if (turnX) {
        box.innerText = "X";
        turnX = false;
      } else {
        box.innerText = "O";
        turnX = true;
      }
    },
    { once: true }
  );
});

const winningPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const patternX = [];
const patternO = [];
