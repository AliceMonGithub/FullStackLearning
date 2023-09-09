const express = require("express");
const articleController = require("../controllers/article.controller.js");
const router = express.Router();

router.post("/create", articleController.createArticle);

module.exports = router;