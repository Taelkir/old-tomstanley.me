var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tom Stanley - Web Developer' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Tom Stanley - Web Developer', name: req.body.name });
});


module.exports = router;
