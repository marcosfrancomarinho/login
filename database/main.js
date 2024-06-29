const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.URL, { dialect: 'postgres' })

try {
    sequelize.authenticate()
} catch (error) {
    console.error(error)
} finally {
    module.exports = { sequelize, DataTypes }
}


