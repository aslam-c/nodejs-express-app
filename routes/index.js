var express = require('express');
var router = express.Router();
const { generateToken } = require('../controllers');
const {validateRequest} = require("../requests/generateToken")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate-token',generateToken)

module.exports = router;
