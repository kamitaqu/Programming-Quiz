const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()
const DB_URL = 'mongodb+srv://knives:3874q@cluster0.qv4mm.mongodb.net/Quiz'   
const questionRoutes = require('./routes/questions')
const resultRoutes = require('./routes/results')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use("/Questions", questionRoutes)

app.use("/Results", resultRoutes)


async function start() {
    try {
        await mongoose.connect(DB_URL, {
            //useNewUrlParser: true,
            //useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
        
    } catch (error){
        console.log(error)
    }
}

start() 