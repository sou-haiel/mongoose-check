const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

app.use(express.json())
require('dotenv').config()


mongoose.connect(process.env.MONGO_URI,(err)=>{err?console.log(err): console.log(`database connected`)});


app.use('/api/user',require('./roots/userRoute'))

app.listen(process.env.PORT, (err)=>{err? console.log(err):console.log('server is running')});