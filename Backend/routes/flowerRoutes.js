const express = require('express');
const multer = require("multer");
const cloudinary = require('../config/cloudinary')

console.log("Cloudinary key:", process.env.CLOUDINARY_API_KEY);

const {
    createFlower,
    getFlower,
    getFlowers,
    deleteFlower,
    updateFlower
} = require('../controllers/flowerController')


const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "flowers", // Folder in your Cloudinary account
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });


const router = express.Router()


router.get('/', getFlowers)

router.get('/:id', getFlower)

// router.post('/', createFlower).

router.post('/', upload.single("image"), createFlower)


router.delete('/:id', deleteFlower)

router.patch('/:id', upload.single("image"), updateFlower)


module.exports = router