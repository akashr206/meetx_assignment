const router = require("express").Router();
const {
    addBooking,
    getAllBookings,
} = require("../controllers/bookingControllers");
const isAuthenticated = require("../middlewares/auth");
const { bookingValidator } = require("../validators/booking");
const validator = require("../middlewares/validator")

//protected route to add booking and get all bookings of an user
router.post("/", bookingValidator, validator, isAuthenticated, addBooking);
router.get("/", isAuthenticated, getAllBookings);

module.exports = router;
