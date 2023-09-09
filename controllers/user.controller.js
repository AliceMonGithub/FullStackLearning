const userModel = require("../models/user.model")

class UserController {
    async register(req, res) {
        const { username, password }= req.body

        if(!username || !password) return {'error': "Missing params"}

        const result = await userModel.createUser(username, password)

        return res.send(result);
    }
}


module.exports = new UserController();