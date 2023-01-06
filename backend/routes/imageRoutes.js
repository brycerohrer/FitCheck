// @desc This is the routing file for images. The purpose of this file is to create endpoints in which
// a person can make requests and then configure the actions that should happen after they do a certain
// request (ex. GET, POST, PUT, DELETE).
const express = require("express");
const router = express.Router();
const multer = require('multer')
// setting up the configuration for multer within this function
// destination controls where the images are being stored, filename controllers how it's named
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/',);
    },
    filename: function(req, file, cb)  {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage})

const {
  uploadImage,
  getImage,
  updateImage,
  deleteImage,
} = require("../controllers/imageController.js");

router.route("/").get(getImage).post(upload.single('image'),uploadImage);

router.route("/:id").put(updateImage).delete(deleteImage);

module.exports = router;
 