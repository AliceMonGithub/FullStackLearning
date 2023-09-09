const express = require("express");
const articleRouter = require("./article.router.js");
const userRouter = require("./user.router.js");
const router = express.Router();

router.use("/articles", articleRouter);
router.use("/users", userRouter);

module.exports = router;