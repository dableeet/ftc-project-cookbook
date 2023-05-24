const router = require('express').Router();

const ShowRecipe = require('../views/ShowRecipe');
const { Users, Recipes } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipes.findOne({ where: { id } });
  const clearRecipe = recipe.get();

  res.render(ShowRecipe, { clearRecipe });
});

module.exports = router;
