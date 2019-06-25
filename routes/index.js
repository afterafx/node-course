const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const kevin = { name: 'Kevin', age: 29, cool: true };
  // res.send('Hey! It works!');
  // res.json(kevin);
  // res.send(req.query.name);
  res.json(req.query);
});

module.exports = router;
