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

const upload = require("../config/cloudinary"); // adjust path

router.post("/", upload.single("image"), async (req, res) => {
  const { name, description, price, category } = req.body;

  let emptyFields = [];
  if (!name) emptyFields.push("name");
  if (!description) emptyFields.push("description");
  if (!price) emptyFields.push("price");
  if (!category) emptyFields.push("category");

  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: "please fill in all the empty space",
      emptyFields,
    });
  }

  if (!req.file || !req.file.path) {
    return res.status(400).json({ error: "Image upload failed or missing" });
  }

  const image = req.file.path; // Cloudinary URL

  try {
    const flower = await Flower.create({
      name,
      image,
      description,
      price,
      category,
    });
    res.status(200).json(flower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


