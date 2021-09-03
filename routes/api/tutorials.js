const tutorials = require('../../controllers/tutorials.controller');
const router = require('express').Router();

router.post('/',      tutorials.create);
router.get('/',       tutorials.findAll);
router.get('/:id',    tutorials.findOne);
router.put('/:id',    tutorials.update);
router.delete('/:id', tutorials.delete);

module.exports = router;
