const userModel = require('../models/user.model.js')
const authModel = require('../models/auth.model.js')

class AuthController {
    async login(req, res) {
        const { username, password }= req.body
        if(!username || !password) return {'error': "Missing params"}

        const result = await userModel.getUserByUsername(username)
        if(result.error) return result

        const token = await authModel.getUserToken(result, password)
        if(token.error) return res.send(token)
        if(!token) return res.send(500)

        return res.cookie("token", token).send({"token": token})

    }
}

module.exports = new AuthController()