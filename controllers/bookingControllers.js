const {
    findAllBookings,
    createBooking,
    findBooking,
} = require("../services/bookingServices");

const addBooking = async (req, res) => {
    try {
        const { activity } = req.body;
        const user = req.user;
        
        //check if the booking already exists
        const bookingExists = findBooking(user.id, activity);
        if(bookingExists)
            return res.status(400).json({ message: "Booking already exists" });

        // create the booking
        const createdBooking = await createBooking({ activity, user: user.id });
        res.json({ message: "Booking added successfully!", createdBooking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const user = req.user;

        //finds all the bookings done by the user
        const bookings = await findAllBookings(user.id);

        //returns empty array if the user hasn't made any booking
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    addBooking,
    getAllBookings,
};
