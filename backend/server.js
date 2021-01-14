import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config.js"

//setup express
const app = express()

//setup mongoose
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if(err) throw err
    console.log('Database connected')
})


//assigning of port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})


app.get("/", (req,res) => {
    res.send('AAAAAA')
})