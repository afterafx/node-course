const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const kevin = { name: 'Kevin', age: 29, cool: true };
  // res.send('Hey! It works!');
  // res.json(kevin);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Kevin',
    dog: req.query.dog,
    title: 'I Love food',
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
