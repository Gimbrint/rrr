class ChessBoardR extends SimpleEvent {
  constructor(container, size=60) {
    super();

    // TODO: build the chessboard HTML+CSS in the container
    this.container = container;
    this.size = size;

    this.pieceImages = [
      {       // Black
        "K": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
        "Q": "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
        "R": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
        "B": "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
        "N": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
        "P": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
      }, {      // White
        "K": "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
        "Q": "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
        "R": "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
        "B": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
        "N": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
        "P": "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
      }];

    this.eventHandlers = {
      move: []
    };
  }

  drawBoard() {
    const xmlns = "http://www.w3.org/2000/svg";

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const square = document.createElementNS(xmlns, "rect");
        square.setAttribute("x", 20+x*this.size);
        square.setAttribute("y", 20+y*this.size);
        square.setAttribute("height", this.size);
        square.setAttribute("width", this.size);
        // square.setAttribute("style", "fill: red")

        if ((x+y) % 2 == 0) {
          square.setAttribute("class", "WhiteSquare");
        } else {
          square.setAttribute("class", "BlackSquare");
        }

        this.container.appendChild(square);
      }
    }
  }

  drawPieces(board) {
    const xmlns = "http://www.w3.org/2000/svg";

    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        const data = board[x][y];

        if (data) {
          const piece = document.createElementNS(xmlns, "image");
          piece.setAttribute("href", this.pieceImages[data.player-1][data.type]);
          piece.setAttribute("x", 20+x*this.size);
          piece.setAttribute("y", 20+y*this.size);
          piece.setAttribute("width", 60);
          piece.setAttribute("height", 60);

          this.container.appendChild(piece);
        }
      }
    }
  }

  move(txtMove) {
    this.triggerEvent("move", txtMove);
  }

  update(model) {
    this.drawBoard();
    this.drawPieces(model.board);
    console.log("here");
  }
}