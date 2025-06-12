// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require("fs")




const app = express();
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// In-memory storage fo demonstration purpose
let flowers = [];

require("./flower");
const images = mangoose.model("flower")



app.post("/upload-image", upload.single("image"), async (req, res) => {
    res.json("upload");
});



app.get("/get-image", async (req, res) => {

    try{
        Image.find({}).then((data) => {
        res.send({status: "ok", data: data });
        });
    } catch (error) {
        res.json({status: error })
    }
})
 



app.post("/upload-image", upload.single("image"), async (req, res) => {
   
    console.log("Uploaded file info:", req.body);
    const imageName = req.file.filename;

    try{
        await images.create({image: imageName})
        res.json({status:"ok"})
    } catch(error){
        res.json({status:error})

    }

})

