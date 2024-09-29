
const Booking = require('../Models/Booking');

const booking = async (req, res) => {
    try {
        
        const {
            nameOfOrganizer,
            designation,
            department,
            phoneNumber,
            titleOfEvent,
            detailsOfEvent,
            hallOccupancyDates,
            timeFrom,
            timeTo,
            nameOfCoordinator,
            mobileNumberOfCoordinator,
            nameOfChiefGuest,
            numberOfChiefGuestsExpected,
            numberOfInvitees
        } = req.body;

        const newEvent = new Booking({
            nameOfOrganizer,
            designation,
            department,
            phoneNumber,
            titleOfEvent,
            detailsOfEvent,
            hallOccupancyDates,
            timeFrom,
            timeTo,
            nameOfCoordinator,
            mobileNumberOfCoordinator,
            nameOfChiefGuest,
            numberOfChiefGuestsExpected,
            numberOfInvitees
        });

       
        await newEvent.save();

       
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
      
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
};

module.exports =  booking ;
