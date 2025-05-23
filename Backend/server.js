require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const flowerRoutes = require("https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/")
const userRoutes = require("https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/")
const multer = require("multer");



const app = express()

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

//middleware
app.use(cors());

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//image
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


//route
app.use('https://flowers-delivery-backend-jcef.onrender.com/api/flowerRoutes/', flowerRoutes)
app.use('/api/user', userRoutes)

//connect to mangoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
app.listen(process.env.PORT, () =>{
    console.log('connected to DB & listening on port', process.env.PORT || 4000)

})
    })
    .catch((error) => {
        console.log(error)
    })
