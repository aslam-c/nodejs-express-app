var express = require('express');
var router = express.Router();
const { generateToken,uploadFile } = require('../controllers');
const { validateRequest } = require("../requests/generateToken")
const {logIpAddress}=require('../middlewares/ip_logger')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate-token', generateToken)
router.post('/upload-file',[logIpAddress],uploadFile)

module.exports = router;
