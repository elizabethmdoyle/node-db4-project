const express = require('express');
const Recipe = require('./model');

const router = express.Router();

router.use('*', (req, res, next) => {
    res.json(api: 'up')
})

router.use((err, req, res, next) => {// eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong insude the recipes router',
        message: err.message,
        stack: err.stack,
    })
})



router.get('/:recipie_id', (req, res, next) => {
    Recipe.getRecipieById()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

// router.get('/animals', (req, res, next) => {
//   helpers.getAnimals() //INCLUDING SPECIES NAME
//     .then(animals => {
//       res.status(200).json(animals);
//     })
//     .catch(next);
// });

// router.post('/animals', (req, res, next) => { // it would be nice to have animal validation midd
//   helpers.createAnimal(req.body)
//     .then(animal => {
//       res.status(201).json(animal);
//     })
//     .catch(next);
// });

// router.delete('/species/:species_id', (req, res, next) => { // it would be nice to have species_id validation midd
//   helpers.deleteSpecies(req.params.species_id)
//     .then(count => {
//       if (count > 0) {
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: 'Record not found' });
//       }
//     })
//     .catch(next);
// });

module.exports = router;
