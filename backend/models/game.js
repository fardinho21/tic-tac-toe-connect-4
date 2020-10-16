const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    host: String,
    hostId: String,
    gameName : String,
    gameType: String,
    hostConfirm: String,
    clientName: String,
    inSession: Boolean
})

module.exports = mongoose.model("GameModel", gameSchema)