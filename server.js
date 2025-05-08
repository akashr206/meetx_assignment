const express = require("express");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const connectDB = require("./utils/db");

const app = express();

const PORT = 5000;

dotenv.config();

app.use(cookieParser());
app.use(express.json());

connectDB();

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/activity", activityRoutes);
app.use("/api/v1/booking", bookingRoutes);

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
