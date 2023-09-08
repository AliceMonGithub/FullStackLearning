const express = require("express");
const router = express.Router();

var set = new Set();

router.post("/register", (req, res) => {
    if(set.has(req.query)) {
        res.send("Database already have this account!")
    }
    else {
        set.add(req.query)

        console.log(set.size)

        res.send("Account has been created!")
    }
})

//router.post("/login", (req, res) => {
//    if(set.has(req.query)) {
//        res.send("You have been logged into account!")
//    }
//    else {
//        res.send("Database doesn't have this account!")
//    }
//})

module.exports = router;