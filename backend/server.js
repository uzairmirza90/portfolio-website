const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express()
dotenv.config()
connectDB()
app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
    res.send('Api is running')
})

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('Server is running'));