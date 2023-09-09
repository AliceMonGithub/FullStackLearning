const { articleModel } = require('../database/models/models.js')

class ArticleModel {
    async createArticle(title, description, data) {
        const article = articleModel.create({
            title,
            description,
            data
        });

        return article
    }
}

module.exports = new ArticleModel();