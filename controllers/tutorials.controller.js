const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  if ( !req.body.title ) {
    res.status( 400 ).send({ message: "Title cannot be empty." });
    return;
  }

  Tutorial.create({
    title:       req.body.title,
    description: req.body.description,
    published:   req.body.published || false,
  })
    .then(data => res.send( data ))
    .catch(err => 
      res.status( 500 ).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      })
    );
};


exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like ]: `%${ title }%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => res.send( data ))
    .catch(err => 
      res.status( 500 ).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      })
    );
};


exports.findOne = (req, res) => {
  const { id } = req.params;

  Tutorial.findByPk( id )
    .then(data => {
      if ( data) {
        res.send( data );
      }
      else {
        res.status( 404 ).send({
          message: `Tutorial with id=${ id } does not exist.`
        });
      }
    })
    .catch(err =>
      res.status( 500 ).send({
        message: `Error retrieving Tutorial with id=${ id }.`
      })
    );
};


exports.update = (req, res) => {
  const { id } = req.params;

  Tutorial.update( req.body, { where: { id } } )
    .then(num => {
      if ( num == 1 ) {
        res.send( req.body );
      }
      else {
        res.status( 400 ).send({
          message: `Cannot update Tutorial with id=${ id }.`
        });
      }
    })
    .catch(err =>
      res.status( 500 ).send({
        message: `Error updating Tutorial with id=${ id }.`
      })
    );
};


exports.delete = (req, res) => {
  const { id } = req.params;

  Tutorial.destroy({ where: { id } } )
    .then(num => {
      if ( num == 1 ) {
        res.status( 200 ).send();
      }
      else {
        res.status( 404 ).send({
          message: `Cannot delete Tutorial with id=${ id }.`
        });
      }
    })
    .catch(err => 
      res.status( 500 ).send({
        message: `Error deleting Tutorial with id=${ id }.`
      })
    );
};
