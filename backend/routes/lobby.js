const express = require("express");
const router = express.Router();
const GameModel = require("../models/game");
const UserModel = require("../models/user");

router.post("/joinGame", (req, res, next) => {
    GameModel.findOne({
        host: req.body.hostName,
        hostId: req.body.hostId,
        gameName: req.body.gameName
    })
    .exec()
    .then(game => {

        if (game.inSession) {
            return res.status(200).json({
                message: "Game is in session",
                status: 200,
                extra: "inSession"
            })
        } else if (!game.inSession) {
            game.inSession = true
        }

        console.log("join game")
        game.clientName = req.body.clientName
        game.inSession = true;
        console.log(game)
        game.save()
        .then(result => {
            console.log(result,"result")
            return res.status(200).json({
                message: "Game found. Waiting on host's response",
                status: 200,
                extra: "gameFound:Waiting"
            })
        })
        .catch(err => {
            console.log(err,"Error")
            return res.status(500)
        })
    })
    .catch(err => {
        console.log(err)
        return res.status(500);
    })
})

router.post("/hostGame", (req, res, next) => {

    let game = GameModel({
        host: req.body.hostName,
        hostId: req.body.hostId,
        gameName: req.body.gameName,
        gameType: req.body.gameType,
        hostConfirm: "wait",
        clientName: "",
        inSession: false
    })

    game.save()
    .then(game => {
        console.log(game)
        return res.status(201).json({
            message: "Game created. Waiting for client to join.",
            status: 201,
            extra: "gameHosted",
        })
    })
    .catch(err => {
        console.log(err)
        return res.status(500)
    })


})

router.post("/cancelWaiting", (req, res, next) => {
    GameModel.findOne({
        host: req.body.hostName,
        hostId: req.body.hostId,
        gameName: req.body.gameName        
    })
    .exec()
    .then(game => {
        if (req.body.isHost) {
            return res.status(200).json({
                message: "Game cancelled",
                status: 200,
                extra: "gameCancelled"
            })
        } else if (!req.body.isHost) {
            game.clientName = ""
            game.hostConfirm = "wait"
            game.inSession = false;
            game.save()
            .then(result => {
                return res.status(200).json({
                    message: "Client left",
                    status: 200,
                    extra: "clientLeft"
                })
            })
            .catch(err => {
                return res.status(500)
            })
        }
    })
    .catch(err => {
        console.log(err)

    })
})

router.post("/hostGame/hostConfirm", (req, res, next) => {

    console.log(req.body)

    GameModel.findOne(
        {
            host: req.body.hostName,
            hostId: req.body.hostId,
            gameName: req.body.gameName
        })
        .exec()
        .then(game => {
            game.hostConfirm = "yes"
            game.save()
            .then(result => {
                console.log(result)
                return res.status(200).json({
                    message: "Host confirm. Joining game",
                    status: 200,
                    extra: "gameJoin"
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(500);
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500);

        })



})

router.post("/hostGame/hostDeny", (req, res, next) => {
    GameModel.findOne({
        host: req.body.hostName,
        hostId: req.body.hostId,
        gameName: req.body.gameName
    })
    .exec()
    .then(game => {
        game.hostConfirm = "no";
        game.clientName = ""
        game.inSession = false;
        game.save()
        .then(result => {
            return res.status(200).json({
                message: "Denied client",
                status: 200,
                extra: "deniedClient"
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500)
        })

    })
    .catch(err => {
        console.log(err)
        return res.status(500);
    })
})

router.post("/check", (req, res, next) => {

        GameModel.findOne(
            {
                host: req.body.hostName,
                hostId: req.body.hostId,
                gameName: req.body.gameName
            })
            .exec()
            .then(game => {
                console.log(game, "<< GAME")
                if (req.body.isHost) {
                    if (game.clientName) {
                        return res.status(200).json({
                            message: "Client is waiting",
                            status: 200,
                            extra: "clientIsWaiting",
                            client: game.clientName
                        })
                    } else {
                        return res.status(200).json({
                            message: "Waiting for client to join",
                            status: 200,
                            extra: "waitingForClient"
                        })
                    }
                } else if (!req.body.isHost) {
                    if (game.hostConfirm === "yes") {
                        return res.status(200).json({
                            message: "Host confrimed. Joining game.",
                            status: 200,
                            extra: "gameJoin"
                        })
                    } else if (game.hostConfirm === "no") {
                        game.hostConfirm = "wait";
                        game.save()
                        .then(result => {
                            return res.status(200).json({
                                message: "Host denied.",
                                status: 200,
                                extra: "hostDenied"
                            })              
                        })
                        .catch(err => {
                            console.log(err)
                            return res.status(500)
                        })
                    } else {
                        console.log("client waiting on host respose")
                        return res.status(200).json({
                            message: "Waiting for host response",
                            status: 200,
                            extra: "waitingOnHost"
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
                return res.status(500)
            })
})

router.get("/fetchGameList", (req, res, next) => {

    GameModel.find()
    .then(documents => {
        return res.status(200).json({
            message: "Game list fetched",
            status: 200,
            extra: "gameList",
            gameList: documents
        })
    })
    .catch(err => {
        console.log(err)
        return res.status(404).json({
            message: "No games available",
            status: 404,
            extra: "noGamesAvail"
        })
    })
        

})

router.post("/deleteGame", (req, res, next) => {
    GameModel.deleteOne({
        host: req.body.hostName,
        hostId: req.body.hostId,
        gameType: req.body.gameType
    })
    .then(result => {

        GameModel.find()
        .then(documents => {
            return res.status(200).json({
                message: "Game deleted",
                status: 200,
                extra: "gameDeleted",
                gameList: documents
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(500)
        })


    })
    .catch(err => {
        console.log(err)
        return res.status(404).json({
            message: "Game not found",
            status: 404,
            extra: "gameNotFound"
        })
    })
})

module.exports = router;