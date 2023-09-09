const { Sequelize } = require("sequelize");

const connection = new Sequelize("postgresql://alice:HyktwFPPr2e4@eseptia.site/testdb")

module.exports = connection