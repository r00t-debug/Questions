require ('colors')
require ('dotenv').config()
const express = require('express')

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/questions', require('./routes/questionRoutes'))

app.listen(port, () => console.log(`listening on port ${port}`))
