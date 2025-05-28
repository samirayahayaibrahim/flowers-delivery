// 

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Flower from './models/flowerModel.js'; // adjust path as needed

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // EXAMPLE: Update image paths (e.g., add `.png` if missing)
    const flowers = await Flower.find();
    for (let flower of flowers) {
      if (flower.image && !flower.image.endsWith('.png')) {
        flower.image = `${flower.image}.png`;
        await flower.save();
        console.log(`Updated: ${flower.name}`);
      }
    }

    console.log("Done updating images.");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Flower from './models/flowerModel.js'; // adjust path as needed

// dotenv.config();

// const start = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     const flowers = await Flower.find();
//     let updatedCount = 0;

//     for (let flower of flowers) {
//       if (flower.image) {
//         const ext = flower.image.split('.').pop().toLowerCase();

//         // Check if extension is valid
//         const validExts = ['jpg', 'jpeg', 'png', 'webp'];
//         const hasValidExtension = validExts.some(valid => flower.image.endsWith(`.${valid}`));

//         if (!hasValidExtension) {
//           // If missing, add ".png"
//           flower.image = `${flower.image}.png`;
//           await flower.save();
//           updatedCount++;
//           console.log(`🔄 Updated: ${flower.name} ➜ ${flower.image}`);
//         }
//       }
//     }

//     console.log(`🎉 Done updating images. Total updated: ${updatedCount}`);
//     process.exit();
//   } catch (err) {
//     console.error("❌ Error:", err);
//     process.exit(1);
//   }
// };

// // start();
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Flower from './models/flowerModel.js'; // adjust the path if needed

// dotenv.config();

// const VALID_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

// const cleanImagePath = (imagePath) => {
//   if (!imagePath) return imagePath;

//   // Extract file name and remove trailing invalid extensions
//   const parts = imagePath.split('.');
//   const base = parts[0];
//   const lastValid = parts.findLast(part => VALID_EXTENSIONS.includes(part.toLowerCase()));

//   // If no valid extension found, default to '.png'
//   const finalExt = lastValid || 'png';

//   return `${base}.${finalExt}`;
// };

// const start = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     const flowers = await Flower.find();
//     let updatedCount = 0;

//     for (let flower of flowers) {
//       if (flower.image) {
//         const cleanedPath = cleanImagePath(flower.image);
//         if (flower.image !== cleanedPath) {
//           flower.image = cleanedPath;
//           await flower.save();
//           updatedCount++;
//           console.log(`🔄 Updated: ${flower.name} ➜ ${flower.image}`);
//         }
//       }
//     }

//     console.log(`🎉 Finished. Total updated: ${updatedCount}`);
//     process.exit();
//   } catch (err) {
//     console.error("❌ Error:", err);
//     process.exit(1);
//   }
// };

// start();

