const { userModel } = require('../database/models/models.js')

class UserModel {
    async createUser(username, password) {
        const user = userModel.create({
            username,
            password
        });

        return user
    }
}

module.exports = new UserModel();