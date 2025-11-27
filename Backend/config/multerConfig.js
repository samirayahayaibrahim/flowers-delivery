const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require('crypto');

// For Ensure 'uploads/' directory exists
const uploadPath = path.join(__dirname, "../../uploads/");
if (!fs.existsSync(uploadPath)) {
    console.log("Creating 'uploads' directory...");
    fs.mkdirSync(uploadPath, { recursive: true });
}

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "flowers",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});




// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../../uploads/'));
  // },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname).toLowerCase(); // e.g. '.png'
//     const uniqueName = crypto.randomBytes(16).toString('hex') + ext;
//     cb(null, uniqueName);
//   }
// });

const upload = multer({ storage });

module.exports = upload;

