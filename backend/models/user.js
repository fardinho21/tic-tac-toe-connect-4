const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    token: String,
    expiresOn: Date
});

module.exports = mongoose.model("UserModel", userSchema);
