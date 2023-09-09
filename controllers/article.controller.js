const articleModel = require("../models/article.model")

class ArticleController {
    async createArticle(req, res) {
        const { title, description, data } = req.body

        if(!title) return {'error': "Missing param title"}

        const result = await articleModel.createArticle(title, description, data)

        return res.send(result);
    }
}


module.exports = new ArticleController();