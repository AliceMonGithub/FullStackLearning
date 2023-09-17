const jwt = require('jsonwebtoken')
const { createHash } = require('crypto')

class AuthModel {

    async getUserToken(user, password) {

        const hashPassword = createHash('sha256').update(password).digest('hex')

        if(user.password != hashPassword) return {'error': 'Invalid password'}

        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, 'AZAZA')

        return token
    }

}

module.exports = new AuthModel()