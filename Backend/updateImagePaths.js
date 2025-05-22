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

