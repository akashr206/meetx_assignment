const User = require('../models/User');

const createUser = async (user) => {
    const createdUser = await User.create(user);
    return createdUser;
}

const findUser = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

module.exports = {
    createUser,
    findUser
}