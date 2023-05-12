class Player {
    constructor() {
        this._currentPlayer = 0;
    }

    get currentPlayer() {
        return this._currentPlayer;
    }

    set currentPlayer(player) {
        this._currentPlayer = player;
    }
}