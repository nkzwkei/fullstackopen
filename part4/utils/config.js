require('dotenv').config()

const { PORT, DATABASE_URL } = process.env

module.exports = {
    DATABASE_URL,
    PORT
}