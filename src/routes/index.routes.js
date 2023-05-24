const router = require('express').Router();

const Home = require('../views/Home');
const ShowRecipe = require('../views/ShowRecipe');

// const {  } = require('../../db/models');

router.get('/', (req, res) => {
  const title = 'Home';
  res.render(Home, { title });
});

router.get('/recipe/:id', (req, res) => {
  res.render(ShowRecipe, { });
});

module.exports = router;
