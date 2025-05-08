const router = require("express").Router();
const {
    addActivity,
    getAllActivities,
} = require("../controllers/activityControllers");

 //sample route for adding multiple activities(for testing purpose)
router.post("/", addActivity);

//public route to get all the activities
router.get("/", getAllActivities);

module.exports = router;
