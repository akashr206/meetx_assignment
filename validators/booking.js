const { body } = require("express-validator");

const bookingValidator = [
    body("activity").notEmpty().withMessage("Activity id is required"),
];

module.exports = { bookingValidator };
