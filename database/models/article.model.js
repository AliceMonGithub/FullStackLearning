const { DataTypes } = require("sequelize")
const sequelize = require("../connection.js")

const Article = sequelize.define("Article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.STRING
    }
})

module.exports = Article;