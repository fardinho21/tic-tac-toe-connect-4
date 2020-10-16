const mongoose = require("mongoose")

const gameStateSchema = mongoose.Schema({
    gameMode: String,
    turn: String,
    hostPiece: String,
    clientPiece: String,
    hostName: String,
    clientName: String,
    gameOver: Boolean,
    board: [[String]]
})

module.exports = mongoose.model("GameStateModel", gameStateSchema)