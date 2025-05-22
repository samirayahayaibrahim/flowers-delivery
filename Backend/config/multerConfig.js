const multer = require("multer");
const path = require("path");
const fs = require("fs");

// For Ensure 'uploads/' directory exists
const uploadPath = path.join(__dirname, "../../uploads/");
if (!fs.existsSync(uploadPath)) {
    console.log("Creating 'uploads' directory...");
    fs.mkdirSync(uploadPath, { recursive: true });
}

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log("Saving file to:, uploads/");
//         cb(null, path.join(__dirname, "uploads"));
//     },


    
//   filename: function (req, file, cb) {
    
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname); // e.g. '.jpeg', '.png'
//     cb(null, uniqueSuffix + ext);
//   },
// });

// // Filter for images only
// const fileFilter = (req, file, cb) => {
//     const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
//     if (allowedMimeTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Invalid file type. Only images are allowed.'), false);
//     }
// };

// Multer upload config
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
// });

// module.exports = upload;

const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase(); // e.g. '.png'
    const uniqueName = crypto.randomBytes(16).toString('hex') + ext;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

module.exports = upload;

