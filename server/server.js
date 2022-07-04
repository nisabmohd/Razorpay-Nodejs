const express = require('express')
const app = express()
require('dotenv').config()
const payment = require('./routes/payment')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require('cors')())

app.use('/payment', payment)
app.get('/key',(req,res)=>{
    res.send(process.env.KeyId)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})