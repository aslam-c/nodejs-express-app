var express = require('express');
var router = express.Router();
const { generateToken,uploadFile } = require('../controllers');
const { validateRequest } = require("../requests/generateToken")

//single fileUploader
const {uploadSingleFile}=require("../utils/fileUploader")
const singleFileUploader=uploadSingleFile("file1",1,["image/png","application/x-httpd-php"],"uploads")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate-token', generateToken)
router.post('/upload-file',singleFileUploader.single("image"),uploadFile)

module.exports = router;
