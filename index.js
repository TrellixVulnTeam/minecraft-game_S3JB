const MATRIX_WIDTH = 20;
const MATRIX_HEIGHT = 20;

const textures = {
  dirt: "dirt",
  sky: "sky",
  wood: "wood",
  leaves: "leaves",
};

function initMatrix() {
  let res = [];
  for (let i = 0; i < MATRIX_HEIGHT; i++) {
    res[i] = [];
    for (let j = 0; j < MATRIX_WIDTH; j++) {
      if (i < 12) { //dirt
        res[i][j] = 0;
      } else {
        res[i][j] = 1;
      }
    }
  }
  return res;
}

const boardMatrix = initMatrix();

const boardContainer = document.querySelector(".boardContainer");

function drawBoard(boardMatrix, boardContainer) {
  boardContainer.innerHTML = "";
  for (let i = 0; i < MATRIX_HEIGHT; i++) {
    //rows
    for (let j = 0; j < MATRIX_WIDTH; j++) {
      //cols
      const newTile = document.createElement("div");
      newTile.style.gridRowStart = i + 1;
      newTile.style.gridColumnStart = j + 1;
      switch (boardMatrix[i][j]) {
        case 0:
          newTile.classList.add(textures.sky);
          break;
        case 1:
          newTile.classList.add(textures.dirt);
          break;
        default:
          newTile.classList.add(textures.sky);
          break;
      }
      boardContainer.appendChild(newTile);
    }
  }
}

drawBoard(boardMatrix, boardContainer);

// maybe later do drawTile ?

// function addTile(tile, boardContainer) {}
