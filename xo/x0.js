let whoPlayNow = "X";

const gameOver = () => {
  let whoWonTheGame;
  let cells = document.querySelectorAll("#container>div");
  if (!cells || cells.length !== 9) return;
  for (let i = 0; i <= 2; i++) {
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  for (let i = 0; i < 9; i += 3) {
    if (
      cells[i].innerHTML == cells[i + 1].innerHTML &&
      cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
      cells[i].innerHTML != ""
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  let i = 0;
  if (
    cells[i].innerHTML == cells[i + 4].innerHTML &&
    cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
    cells[i].innerHTML != ""
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  i = 2;
  if (
    cells[i].innerHTML == cells[i + 2].innerHTML &&
    cells[i + 2].innerHTML == cells[i + 4].innerHTML &&
    cells[i].innerHTML
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  if (whoWonTheGame) {
    setTimeout(() => {
      alert(`${whoWonTheGame} won the game`);
      newGame();
    }, 200);
  } else {
    for (let cell of cells) {
      if (!cell.innerHTML) return;
    }
    setTimeout(() => {
      alert("no one won the game");
      newGame();
    }, 200);
  }
};

const gameInit = () => {
  let cells = document.querySelectorAll("#container>div");
  for (let cell of cells) {
    cell.addEventListener("click", onClick);
  }
};

const onClick = (cell) => {
  if (cell.target.innerHTML) return;
  cell.target.innerHTML = whoPlayNow;
  whoPlayNow == "X" ? (whoPlayNow = "O") : (whoPlayNow = "X");
  gameOver();
};

const newGame = () => {
  whoPlayNow = "X";
  let cells = document.querySelectorAll("#container>div");
  for (let cell of cells) {
    cell.innerHTML = "";
  }
};

window.addEventListener("load", () => {
  gameInit();
  document.getElementById("newGame").addEventListener("click", () => {
    newGame();
  });
});
