const bcryt = require("bcrypt");
const { createUser, findUser } = require("../services/userServices");
const { v4: uuidv4 } = require("uuid");
const { generateToken } = require("../utils/jwtHelpers");

const registerUser = async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;

        //checking if the user already exists
        const checkUser = await findUser(email);
        if (checkUser)
            return res
                .status(400)
                .send({
                    error: "User already exists, please consider logging in",
                });

        const id = uuidv4();

        //hash the password
        const hash = await bcryt.hash(password, 10);

        //creating user
        await createUser({
            id,
            name,
            email,
            phoneNumber,
            password: hash,
        });

        res.status(201).json({
            message: "User registered successfully!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //checking if the user exists
        const user = await findUser(email);
        if (!user) return res.status(404).send({ error: "User not found" });

        //verifying the password through comparing
        const comparedPassword = await bcryt.compare(password, user.password);
        if (!comparedPassword)
            return res.status(401).send({ error: "Invalid credentials" });

        //generating the token
        const token = generateToken({
            id: user.id,
            email: user.email,
            phoneNumber: user.phoneNumber,
        });

        res.json({
            message: "Login successful!",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = { registerUser, loginUser };
