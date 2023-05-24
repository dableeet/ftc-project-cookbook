const router = require('express').Router();

const Home = require('../views/Home');

// const {  } = require('../../db/models');

router.get('/', (req, res) => {
  res.render(Home, {});
});

module.exports = router;
