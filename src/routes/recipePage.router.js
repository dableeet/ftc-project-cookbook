const router = require('express').Router();

const ShowRecipe = require('../views/ShowRecipe');
const { Users, Recipes } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
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
  } catch (error) {
    console.log(error);
  }
});

router.delete('/favorite/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const selectUser = await Users.findOne({ where: { id: req.session.user.id } });
    const arrFavourite = selectUser.favourite;
    const filterFavourite = arrFavourite.filter((el) => el !== Number(id));

    await Users.update(
      { favourite: filterFavourite },
      { where: { id: req.session.user.id } },
    );

    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

router.put('/favorite/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const selectUser = await Users.findOne({ where: { id: req.session.user.id } });
    const arrFavourite = selectUser.favourite;
    arrFavourite.push(Number(id));

    await Users.update(
      { favourite: arrFavourite },
      { where: { id: req.session.user.id } },
    );
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;