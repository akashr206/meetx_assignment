const { default: mongoose, Schema } = require("mongoose");

const bookingSchema = new Schema({
    user: { type: String, required: true },
    activity: { type: String, required: true },
    bookedAt: { type: Date, required: true, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
