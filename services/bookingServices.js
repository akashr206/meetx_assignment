const Booking = require('../models/Booking');


const createBooking = async (booking) => {
    const createdBooking = await Booking.create(booking);
    return createdBooking;
}

const findAllBookings = async (user) => {
    const bookings = await Booking.find({user});
    return bookings;
}

const findBooking = async (user, activity) => {
    const booking = await Booking.findOne({user, activity});
    return booking;
}

module.exports = {
    createBooking,
    findAllBookings,
    findBooking
}