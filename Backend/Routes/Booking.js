const express = require("express");
const { authenticateToken } = require("../Middlewares/Auth");
const booking = require("../Controller/Booking");


const router = express.Router();

router.post("/",booking);

module.exports = router;