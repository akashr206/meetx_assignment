const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JSON_SECRET, {
        expiresIn: "1d",
    });
    return token;
};

const verifyToken = (token) => {
    const data = jwt.verify(token, process.env.JSON_SECRET);
    return data;
};

module.exports = { generateToken, verifyToken };
