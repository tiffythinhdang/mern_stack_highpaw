const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Walk = require('../../models/Walk');
const Dog = require('../../models/Dog');
// const User = require('../../models/User');
const validateWalkInput = require('../../validation/walks');

router.get('/', (req, res) => {
  Walk.find()
    .sort({ date: -1 })
    .then(walks => res.json(walks))
    .catch(err => res.status(404).json({ nowalksfound: 'No walks found' }));
});

router.get('/:id', (req, res) => {
  Walk.findById(req.params.id)
    .then(walk => res.json(walk))
    .catch(err => res.status(404).json({ nowalksfound: 'No walk found with that ID' }));
});

router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // const { errors, isValid } = validateWalkInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }


    // const dogs = Dog.find({ owner: req.body.user }).then((dog) => {
    //   return res.json(dog)
    // })

    Dog.find({ owner: { $in: req.body.user } }).then(dogsArr => {

      if (dogsArr.length < 1) {
        return res.status(404).json({ dog: 'Must walk at least one dog'})
      }
      
      const newWalk = new Walk({
        // dog: req.body.dog, 
        dogs: dogsArr,
        user: req.body.user, // req.user.id 
        //
      });

      newWalk.save().then(walk => res.json(walk));

    })
  }
);

router.delete('/:id',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // Dog.deleteMany({ owner: { $in: req.params.id } }).then( // test bc no request model
    Request.deleteMany({ walk: { $in: req.params.id } }).then(
  
      Walk.findByIdAndDelete(req.params.id,
     

      (err) => {
        if (err) {
          res.status(422).send({ error: err });
        }
        res.status(200).json({ message: 'Walk deleted!' })
      })
    )
  })


module.exports = router