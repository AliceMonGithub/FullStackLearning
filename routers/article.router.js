const express = require("express");
const articleController = require("../controllers/article.controller.js");
const authOnly = require("../middlewares/authOnly.middleware.js")
const router = express.Router();

router.post("/create", authOnly, articleController.createArticle);

module.exports = router;