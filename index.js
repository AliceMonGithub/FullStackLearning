const express = require("express")
const router = require("./routers/router.js")
const db = require("./database/connection.js")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(router)

const start = async () => {
    try {
        await db.authenticate()
        await db.sync({ alter: true })

        app.listen(3000, () => console.log("Server has been started"))
    } 
    catch(e) {
        console.log(e)
    }
}

start()