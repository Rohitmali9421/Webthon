const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    nameOfOrganizer: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    titleOfEvent: {
        type: String,
        required: true
    },
    detailsOfEvent: {
        type: String,
        required: true
    },
    hallOccupancyDates: {
        type: [Date], 
        required: true
    },
    timeFrom: {
        type: String, 
        required: true
    },
    timeTo: {
        type: String,
        required: true
    },
    nameOfCoordinator: {
        type: String,
        required: true
    },
    mobileNumberOfCoordinator: {
        type: String,
        required: true
    },
    nameOfChiefGuest: {
        type: String,
        required: true
    },
    numberOfChiefGuestsExpected: {
        type: Number,
        required: true
    },
    numberOfInvitees: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
