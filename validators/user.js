const { body } = require('express-validator');

const registerValidator = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name should be at least 2 characters'),

  body('email')
    .isEmail().withMessage('Invalid email address'),

  body('phoneNumber')
    .matches(/^[0-9]{10}$/).withMessage('Phone number must be valid'),

  body('password')
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
    .withMessage('Password must be 8 characters and should contain atleast one special character and atleast one uppercase letter '),
];


const loginValidator = [
  body('email')
    .isEmail().withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

module.exports = { registerValidator, loginValidator };