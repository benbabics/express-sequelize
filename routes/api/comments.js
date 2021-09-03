const comments = require('../../controllers/comments.controller');
const router = require('express').Router({ mergeParams: true });

router.post('/', comments.create);

module.exports = router;
