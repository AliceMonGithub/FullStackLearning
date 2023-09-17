const express = require("express");
const authController = require("../controllers/auth.controller.js");
const router = express.Router();

router.get("/login", authController.login);

module.exports = router;