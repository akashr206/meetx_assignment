const router = require("express").Router();
const { loginUser, registerUser } = require("../controllers/userControllers");
const { loginValidator, registerValidator } = require("../validators/user");
const validator = require("../middlewares/validator")

//routes to register and login user
router.post("/login", loginValidator, validator, loginUser);
router.post("/register", registerValidator, validator, registerUser);

module.exports = router;
