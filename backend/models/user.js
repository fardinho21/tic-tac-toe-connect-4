const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    token : { type: String, required : true },
    expiresOn: { type : Date, require : true }
});

module.exports = mongoose.model("UserModel", userSchema);
