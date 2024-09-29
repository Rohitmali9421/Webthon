const express = require("express");

const { validateLogin, validateSignUp } = require("../Middlewares/Validation");
const FileUpload = require("../Middlewares/FileUpload");
const { authenticateToken } = require("../Middlewares/Auth");
const { handlecheck, handleLogin, handleSignUp, handleGetUser } = require("../Controller/User");

const router = express.Router();
router.get("/",handlecheck)
router.post("/login",validateLogin,handleLogin);
router.post("/signup",validateSignUp,handleSignUp);
router.get("/getUser",authenticateToken,handleGetUser);
module.exports = router;