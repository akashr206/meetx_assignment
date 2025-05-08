const {
    createActivity,
    findAllActivities,
} = require("../services/activityServices");

//this is just for testing (validators aren't considered)
const addActivity = async (req, res) => {
    try {
        const activities = req.body;

        // creates multiple activities
        const createdActivities = await createActivity(activities); 
        res.json({
            message: "Activities added successfully!",
            createdActivities,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

//get all activities
const getAllActivities = async (req, res) => {
    try {
        const activities = await findAllActivities();
        res.json(activities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    addActivity,
    getAllActivities,
};
