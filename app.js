const resetButton = document.querySelector("#reset");
const boxes = document.querySelectorAll(".box");
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
let patternX = [];
let patternO = [];
let turnX = true;

function addingListeners() {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClicks);
  });
}

function reset() {
  turnX = true;
  patternX = [];
  patternO = [];
  boxes.forEach((box) => {
    box.innerText = "";
    box.removeEventListener("click", handleClicks);
    box.classList.remove("shadows", "colorX", "colorO");
  });
  addingListeners();
}

function checkWinner(playerPattern) {
  for (let pattern of winningPatterns) {
    if (pattern.every((id) => playerPattern.includes(id))) {
      const winner = playerPattern == patternX ? "X" : "O";
      setTimeout(() => {
        alert(`The winner is ${winner}`);
        reset();
      }, 100);
      return;
    }
  }

  if (patternX.length + patternO.length === 9) {
    setTimeout(() => {
      alert(`This is a draw!`);
      reset();
    }, 100);
  }
}

function handleClicks(event) {
  const box = event.target;

  box.classList.add("shadows");

  if (box.innerText != "") return;

  if (turnX) {
    box.innerText = "X";
    box.classList.add("colorX");
    patternX.push(Number(box.id));
    checkWinner(patternX);
    turnX = false;
  } else {
    box.innerText = "O";
    box.classList.add("colorO");
    patternO.push(Number(box.id));
    checkWinner(patternO);
    turnX = true;
  }

  box.removeEventListener("click", handleClicks);
}

addingListeners();

resetButton.addEventListener("click", () => {
  reset();
});
