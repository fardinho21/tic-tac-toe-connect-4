const express = require("express");
const router = express.Router();
const GameStateModel = require("../models/gameState");


router.post("/move", (req, res, next) => {

})

router.post("/check", (req, res, next) => {

})

router.post("/startGame", (req, res, next) => {

    const turn = Math.floor(Math.random()*2);

    const gameState = GameStateModel({

    })

    gameState.save()
    .then(result => {
        return res.status(200).json({
            message: "Game Started!",
            status: 200,
            extra: gameStarted
        })
    })
    .catch(err => {
        console.log(err)
        return res.status(500).json({
            message: "Interval Server Error",
            status: 500,
            extra: "gameStartError"
        })
    })
})

module.exports = router;