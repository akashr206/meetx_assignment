const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Database Connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};      

module.exports = connectDB;
