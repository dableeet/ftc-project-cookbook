const router = require('express').Router();

const Home = require('../views/Home');
const ShowRecipe = require('../views/ShowRecipe');

// const {  } = require('../../db/models');

router.get('/', (req, res) => {
  res.render(Home, {});
});


router.get('/recipe/:id', (req, res) => {
  res.render(ShowRecipe, { });
});


module.exports = router;
