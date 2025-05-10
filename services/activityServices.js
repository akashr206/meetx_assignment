const Activity = require("../models/Activity");
const { v4: uuidv4 } = require("uuid");

const createActivity = async (activities) => {
    //creates multiple activities (made it to test the endpoints by adding dummy activities)
    const createdActivity = await Promise.all(
        activities.map((activity) =>
            Activity.create({ ...activity, id: uuidv4() })
        )
    );
    return createdActivity;
};

const findAllActivities = async () => {
    //finds all the activities
    const activities = await Activity.find();
    return activities;
};

const findActivity = async (id) => {
    //find one activity using its ID
    const activity = await Activity.findOne({ id });
    return activity;
};

module.exports = { createActivity, findAllActivities, findActivity };
