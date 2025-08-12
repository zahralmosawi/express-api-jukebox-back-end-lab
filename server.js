const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const trackRoutes = require('./routes/trackRoutes')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', () => {
    console.log('connected to database')
})

app.use(express.json())
app.use(logger('dev'))
app.use('/', trackRoutes)

app.listen(3000, () => {
    console.log('app is listening')
})