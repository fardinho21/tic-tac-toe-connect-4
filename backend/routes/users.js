const secret = "d7z3NaN8LFDEeDsxQ7WwPsELy8ei0HnDOMljWr2jsSCuXpRCi4tciAFMtdXzpDQ1XbAWfKvqAiunbR/SgQJ6ng"
const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

const router = express.Router();

router.post("/login", (req, res, next) => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 2)
    const token = jwt.sign(
        {username: req.body.username},
        secret,
        {expiresIn: '2h'}
        );

    const newUser = UserModel({
        username : req.body.username,
        token: token,
        expiresOn: expiration
    })

    console.log(newUser)

    UserModel.findOne({username: req.body.username})
    .then( user => {
        if (user) {
            return res.status(304).json({
                message : "Username is already in use!",
                status: 304,
                error: "userCredentialError:inUse"
            })
        } else {
            
            newUser.save().
            then(userData => {
                
                return res.status(201).json({
                    message: "Username sucsessfuly created!",
                    status: 201,
                    extra: "accessGranted",
                    username: newUser.username,
                    userId: userData._id,
                    token: token
                })

            })
            .catch(err => {
                console.log(err)

                return res.status(500).json({
                    message: err,
                    status: 500
                })
            })


        }
    })
    .catch(err => {
        console.log(err);

        return res.status(500).json({
            message: err,
            status: 500
        })
    })
});

router.post("/logout/:username/:token", (req, res, next) => {

    UserModel.deleteOne({username: req.body.username, token: req.body.token})
    .then( result => {
        if (result.deletedCount === 1) {
            
            return res.status(200).json({
                message: "Logging out",
                status: 200,
                extra: "logoutUser"
            })
        } else {
            return res.status(404).json({
                message: "User not found!",
                status: 404,
                error: "userCredentialError:NotFound"
            })
        }
    })
    .catch(error => {
        console.log(error);

        return res.status(500).json({
            message: error,
            status: 500
        })
    }) 

});

module.exports = router;