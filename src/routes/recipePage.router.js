const router = require('express').Router();

const ShowRecipe = require('../views/ShowRecipe');
const { Users, Recipes } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipes.findOne({ where: { id } });
  const clearRecipe = recipe.get();
  if (clearRecipe.instructions.includes('<ol>')) {
    const a = clearRecipe.instructions.replaceAll('<ol>', '');
    const b = a.replaceAll('<li>', '');
    const c = b.replaceAll('</li>', ' ');
    const d = c.replaceAll('</ol>', '');
    clearRecipe.instructions = d;
  }
  const favourites = await Users.findOne({ where: { id: req.session.user.id } });
  const clearFavourites = favourites.get();
  const isFavourite = clearFavourites.favourite?.includes(Number(id));
  res.render(ShowRecipe, { clearRecipe, isFavourite });
});

module.exports = router;
