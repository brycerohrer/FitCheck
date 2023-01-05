const express = require ('express')
const router = express.Router()

// @desc Create Image
// @route POST api/images
// @access Private
const uploadImage = (req,res) => {
    res.status(200).json({message: 'upload image'})
}
    
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
    res.status(200).json({ message: `delete image ${req.params.id}` });

}

module.exports = {
    uploadImage,
    getImage,
    updateImage,
    deleteImage
}
