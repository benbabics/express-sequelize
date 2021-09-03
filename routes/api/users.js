var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Ben' },
  ]);
});

module.exports = router;
