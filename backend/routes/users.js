const { RequiredValidator } = require("@angular/forms");

const express = require("express");
const UserModel = require("../models/user");

const router = express.Router();

router.post("", (req, res, next) => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 2);

    const user = new UserModel({
        username : req.body.username,
        token: "test token",
        expiresOn : expiration
    });

    // user.save();
    
    // UserModel.find()
    //     .then(documents => {
    //         console.log(documents)
    //     })

    //console.log(req.body)

    res.status(201).json({
        message: "logged in"
    });
});

module.exports = router;