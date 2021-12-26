require('dotenv').config()

module.exports = {
    "mysql": {
        "banco-de-dados": process.env.DATABASE_ENV,
        "usuario": process.env.USER_ENV,
        "senha": process.env.PASSWORD_ENV,
        "host": process.env.HOST_ENV
    },
    "api": {
        "porta": 3000
    }
}