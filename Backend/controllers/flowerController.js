const Flower = require("../models/flowerModel")
const mongoose = require('mongoose')
const multer = require("multer");



//all flower
const getFlowers = async (req, res) => {
    const flowers = await Flower.find({}).sort({createdAt: -1})

    res.status(200).json(flowers)
}


//single flower
const getFlower = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such flower'})
    }

    const flower = await Flower.findById(id)

    if (!flower) {
    return res.status(404).json({error: 'no such flower'})
}
    res.status(200).json(flower)
}

//create new flower & connected to db
const createFlower = async (req, res) => {
    console.log('Incoming form data:', req.body);
    console.log('Uploaded file info:', req.file);


    const { name, description, price, category} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }
    
    if(!description) {
        emptyFields.push('description')
    }
    
    if(!price) {
        emptyFields.push('price')
    }
    
    if(!category) {
        emptyFields.push('category')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'please fill in all the empty space', emptyFields})
    }
    
    if (!req.file) {
        return res.status(400).json({ error: 'Image upload failed or missing' });
        }
    
    const image = `http://localhost:4000/uploads/${req.file.filename}` ;
    
    try{
        const flower = await Flower.create({name, image, description, price, category});
        res.status(200).json(flower)
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}

const deleteFlower = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such flower'})
    }

    const flower = await Flower.findOneAndDelete({_id: id})

    if (!flower) {
        return res.status(400).json({error: 'no such flower'})
    }

    res.status(200).json(flower)
}

const updateFlower = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such flower'})
    }

    const flower = await Flower.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!flower) {
        return res.status(400).json({error: 'no such flower'})
    }

    res.status(200).json(flower)
}

module.exports = {
    getFlower,
    getFlowers,
    createFlower,
    deleteFlower,
    updateFlower
}