const { default: mongoose, Schema } = require("mongoose");

const activitySchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true},
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
