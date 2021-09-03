const db = require('../models');
const Comment = db.comments;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if ( !req.body.name ) {
    res.status( 400 ).send({ message: "Name cannot be empty." });
  }
  if ( !req.body.text ) {
    res.status( 400 ).send({ message: "Text cannot be empty." });
  }

  Comment.create({
    name:       req.body.name,
    text:       req.body.text,
    tutorialId: req.params.tutorialId,
  })
    .then(data => res.send( data ))
    .catch(err =>
      res.status( 500 ).send({
        message: err.message || "Some error occurred while creating the Comment."
      })
    );
};
