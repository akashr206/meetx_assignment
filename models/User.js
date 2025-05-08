const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
