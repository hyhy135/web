const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    role: {type: String, enum: ["admin", "user"], default: "user"},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    phoneNumber: {type: String, required: true},
    name: {type: String},
})
const User = mongoose.model("user", userSchema);
module.exports = User;