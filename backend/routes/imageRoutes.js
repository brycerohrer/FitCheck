const express = require ('express')
const router = express.Router()
const { uploadImage, getImage, updateImage, deleteImage} = require('../controllers/imageController.js')

router.route('/').get(getImage).post(uploadImage)

router.route('/:id').put(updateImage).delete(deleteImage)

module.exports = router



