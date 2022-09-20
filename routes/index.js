var express = require('express');
const { generateToken } = require('../controllers');
var router = express.Router();
const {validateRequest} = require("../requests/generateToken")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate-token',generateToken)

module.exports = router;
