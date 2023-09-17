const jwt = require('jsonwebtoken')

module.exports = function AuthMiddleware(req, res, next) {
    const token = req.cookies["token"];

    if (!token) return res.sendStatus(401)

    const decoded = jwt.verify(token, 'AZAZA')

    if(!decoded) return res.sendStatus(401)

    next()

}