const express = require ('express')
const router = express.Router()
const fs = require('fs');

const Image = require("../models/imageModel");


// @desc Create Image
// @route POST api/images
// @access Private
const uploadImage = (req,res) => {
    if (!req.file) {
        res.status(400)
        throw new Error('please add an image ')
    }
    res.status(200).json({message: req.file})   // return json message of data we are recieving from req.file
} // note, .file is added through multer, and allows us to access multi-form data such as images.
    
// @desc Get Image
// @route POST api/images
// @access Private
const getImage = (req,res) => {
    res.status(200).json({message: 'get images'})

}
// @desc Update Image
// @route POST api/images
// @access Private
const updateImage = (req,res) => {
     res.status(200).json({message: `updated image ${req.params.id}`})

}
// @desc Delete Image
// @route POST api/images
// @access Private
const deleteImage = (req,res) => {
    if (!req.params.id) {
        res.status(400);
        throw new Error("please specify an image to delete");
    } 
    const filePath = `./uploads/${req.params.id}`;

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Successfully deleted ${filePath}`);
    });
    res.status(200).json({message: `you have attempeted to delete ${req.params.id}`}) 
    // res.status(200).json({ message: req.file });
    }

module.exports = {
    uploadImage,
    getImage,
    updateImage,
    deleteImage
}
