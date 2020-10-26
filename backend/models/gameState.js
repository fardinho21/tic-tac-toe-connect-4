const mongoose = require("mongoose")

const gameStateSchema = mongoose.Schema({
    gameMode: String,
    turn: String,
    hostPiece: String,
    clientPiece: String,
    hostName: String,
    clientName: String,
    gameOver: Boolean,
    clientLeft: Boolean,
    hostLeft: Boolean,
    winner: String,
    lastUpdatedPiece: {index: [Number], set: Boolean, piece: String},
    board: [[{index: [Number],set: Boolean, piece: String}]]
})

module.exports = mongoose.model("GameStateModel", gameStateSchema)