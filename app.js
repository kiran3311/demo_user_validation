const express = require('express')
const app = express()
const cors = require("cors");
require('./config/db_connect')
const authRoute= require('./routes/userRoute')

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/auth',authRoute)

//DEPLOYMENT

if(process.env.NODE_ENV === 'production' ){
    app.use(express.static('my-app/build'))
}

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})