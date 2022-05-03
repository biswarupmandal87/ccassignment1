var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CC Assignment Login',message:"" });
});
router.post("/", function (req, res) {
  var email = req.body.email
  var password = req.body.password
  if(email != '2021mt93680@wilp.bits-pilani.ac.in'){
    res.render('index', { title: 'CC Assignment Login',message:"Wrong Email id" });
  }
  else if(password != '2021mt93680'){
    res.render('index', { title: 'CC Assignment Login',message:"Wrong password" });
  }
  else{
    res.redirect("/user");
  }
});
module.exports = router;
