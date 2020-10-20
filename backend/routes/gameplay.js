const express = require("express");
const router = express.Router();
const GameStateModel = require("../models/gameState");


router.post("/confirmMove", (req, res, next) => {
    GameStateModel.findOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName        
    })
    .exec()
    .then(gameState => {
        gameState.lastUpdatedPiece = {
            index: req.body.move,
            set: true,
            piece: gameState.turn
        };
        gameState.board[req.body.move[0]][req.body.move[1]] = {
            index: req.body.move,
            set: true,
            piece: gameState.turn
        };
        //add logic for determining winner
        gameState.turn = gameState.turn === "x" ? "o" : "x";
        gameState.save()
        .then(result => {
            return res.status(200).json({
                message: "Server confirmed move",
                status: 200,
                extra: "moveConfirmed",
                gameState: gameState
            })
        })
        .catch(err => {
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                extra: "serverError"
            })
        })
    })
    .catch(err => {

    })
})

router.post("/check", (req, res, next) => {
    GameStateModel.findOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName
    })
    .exec()
    .then(gameState => {
        
        console.log(gameState);

        if (gameState.winner) {
            return res.status(200).json({
                message: "Winner declared",
                status: 200,
                extra: {msg: "winnerDeclared", win: gameState.winner},
                gameState: gameState
            })
        }
        
        if (req.body.isHost) {
            if (gameState.clientLeft) {
                gameState.gameOver = true;
                gameState.winner = gameState.hostName
                gameState.save()
                .then(result => {
                    return res.status(200).json({
                        message: "Client left the game",
                        status: 200,
                        extra: "clientLeft"
                    });
                })
                .catch(err => {
                    return res.status(500).json({
                        message: "Internal Server Error",
                        status: 500,
                        extra: "serverError"
                    });
                })
            } else if(gameState.turn === gameState.hostPiece) {
                return res.status(200).json({
                    message: "Host turn",
                    status: 200,
                    extra: "hostTurn",
                    gameState: gameState
                });
            } else {
                return res.status(200).json({
                    message: "Game state fetched",
                    status: 200,
                    extra: "gameState",
                    gameState: gameState
                });
            }

        } else if (!req.body.isHost) {
            if (gameState.hostLeft) {
                gameState.gameOver = true;
                gameState.winner = gameState.clientName
                gameState.save()
                .then(result => {
                    return res.status(200).json({
                        message: "Host left the game",
                        status: 200,
                        extra: "hostLeft"
                    });
                })
                .catch(err => {
                    return res.status(500).json({
                        message: "Internal Server Error",
                        status: 500,
                        extra: "serverError"
                    });
                })
            } else if (gameState.turn === gameState.clientPiece) {
                return res.status(200).json({
                    message: "Client turn",
                    status: 200,
                    extra: "clientTurn",
                    gameState: gameState
                });
            } else {
                return res.status(200).json({
                    message: "Game state fetched",
                    status: 200,
                    extra: "gameState",
                    gameState: gameState
                });
            }
        }       

    })
    .catch(err => {
        return res.status(500).json({
            message: "Internal Server Error",
            status: 500,
            extra: "serverError"
        })
    })
})

router.post("/startGame", (req, res, next) => {

    console.log(req.body.board)

    const turn = Math.floor(Math.random()*2) === 0 ? "x" : "o";
    const hostPiece = Math.floor(Math.random()*2) === 0 ? "x" : "o";
    const clientPiece = hostPiece === "x" ? "o" : "x";

    const gameState = GameStateModel({
        gameMode: req.body.gameMode,
        turn: turn,
        hostPiece: hostPiece,
        clientPiece: clientPiece,
        hostName: req.body.hostName,
        clientName: req.body.clientName,
        clientLeft: false,
        hostLeft: false,
        gameOver: false,
        lastUpdatedPiece: {index: [], set: false, piece: ""},
        board: req.body.board,
    })

    gameState.save()
    .then(result => {



        return res.status(200).json({
            message: "Game Started!",
            status: 200,
            extra: "gameStarted",
            gameState: gameState
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

router.post("/declareWinner", (req, res, next) => {
    GameStateModel.findOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName
    })
    .exec()
    .then(gameState => {
        gameState.winner = req.body.check
        gameState.save()
        .then(result => {
            return res.status(200).json({
                message: "Winner declared",
                status: 200,
                extra: "winnerSet"
            })
        })
        .catch(err => {
            return res.status.json({
                message: "Internal Server Error",
                status: 500,
                extra: "serverError"
            })            
        })

    })
    .catch(err => {
        return res.status.json({
            message: "Internal Server Error",
            status: 500,
            extra: "serverError"
        })
    })
})

router.post("/deleteGame", (req, res, next) => {
    GameStateModel.deleteOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName
    })
    .exec()
    .then(result => {
        return res.status(200).json({
            message: "Game deleted",
            status: 200,
            extra: "gameDeleted"            
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: "Internal Server Error",
            status: 500,
            extra: "serverError"
        })
    })
}) 

router.post("/getGameState", (req, res, next) => {
    GameStateModel.findOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName        
    })
    .exec()
    .then(gameState => {
        return res.status(200).json({
            message: "Game state",
            status: 200,
            extra: gameState
        })
    })
    .catch(err => {
        return res.status(500).json({

        })
    })
})

router.post("/deleteGameState", (req, res, next) => {
    GameStateModel.deleteOne({
        gameMode: req.body.gameMode,
        hostName: req.body.hostName,
        clientName: req.body.clientName  
    })
    .exec()
    .then(result => {
        return res.status(200).json({
            message: "Game deleted",
            status: 200,
            extra: "gameStateDeleted"
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: "Internal Server Error",
            status: 500,
            extra: "serverError"            
        })
    })

})

module.exports = router;