const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/images', require('./routes/imageRoutes'))

app.listen(port, () => console.log(`Server has started on port ${port}`))