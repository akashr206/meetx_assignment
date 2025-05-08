const { verifyToken } = require("../utils/jwtHelpers");

const isAuthenticated = (req, res, next) => {
    const {token} = req.cookies; //extracts the token from cookies
    
    //checks if the token exists
    if (!token) { 
        return res
            .status(401)
            .json({ message: "Unauthorized, no token provided" });
    }

     //verifies the  token
    const data = verifyToken(token);
    if (!data) { 
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = data;
    next();
};

module.exports = isAuthenticated;
