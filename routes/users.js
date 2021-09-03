var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: [
      { id: 1, name: 'Bob' },
      { id: 2, name: 'Ben' },
    ]
  });
});

module.exports = router;
