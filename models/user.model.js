const { userModel } = require('../database/models/models.js')
const { createHash, randomBytes } = require('crypto')

class UserModel {
    async createUser(username, password) {
        const salt = randomBytes(32).toString('hex')
        const hashPassword = createHash('sha256').update(password).digest('hex')

        const user = await userModel.create({
            username,
            password: hashPassword,
            salt
        });

        return user
    }

    async getUserByUsername(username) {
        const user = await userModel.findOne({
            where: {
                username
            }
        })

        if(!user) return {'error': 'User doesn\'t exist'}

        return user
    }
}

module.exports = new UserModel();