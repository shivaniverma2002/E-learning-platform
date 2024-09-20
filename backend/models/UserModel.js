const mongoose = require("mongoose");
const { module } = require("mongoose");
const { userSchema } = require("../Schema/UserSchema");

const userModel = new model("user", userSchema);
module.exports = { userModel };
