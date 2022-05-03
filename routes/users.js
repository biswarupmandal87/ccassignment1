var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', {title: 'CC Assignment Dashboard',message:"Login successfully"});
});

module.exports = router;
