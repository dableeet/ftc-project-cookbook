const router = require('express').Router();

const { Users, Recipes, sequelize } = require('../../db/models');

const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    //   const { recipes } = await (
    //     await fetch('https://api.spoonacular.com/recipes/random?number=12', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'x-api-key': process.env.APIKEY,
    //       },
    //     })
    //   ).json();

    //   const noNullObj = recipes.filter((el) => el.image && el.instructions && el);

    //   const cardInfo = []

    //   noNullObj.forEach((el) => {
    //     const info = {
    //       id: el.id,
    //       title: el.title,
    //       extendedIngredients: el.extendedIngredients,
    //       image: el.image,
    //       instructions: el.instructions,
    //       readyInMinutes: el.readyInMinutes,
    //     };

    //     Promise.resolve(
    //       Recipes.findOrCreate({
    //         where: { id: el.id },
    //         defaults: el,
    //       })
    //     );

    //     cardInfo.push(info);
    //   });

    const cardInfo = (await Recipes.findAll({ limit: 12 })).map((el) =>
      el.get({
        plain: true,
      })
    );

    const { favourite } = await Users.findOne({
      where: { id: req.session.user.id },
    });

    console.log(favourite);

    const filtered = cardInfo.map((recipe) => {
      if (favourite.includes(recipe.id)) {
        recipe.added = true;
      } else {
        recipe.added = false;
      }
      return recipe;
    });

    res.render(Main, { cardInfo: filtered });
  } catch (error) {
    console.log(error);
  }
});

router.put('/recipe/:id', async (req, res) => {
  const { id } = req.params;

  const { addToFav } = req.body;

  try {
    if (addToFav) {
      await Users.update(
        {
          favourite: sequelize.fn(
            'array_append',
            sequelize.col('favourite'),
            id
          ),
        },
        { where: { id: req.session.user.id } }
      );

      await Users.findOne({
        where: { id: req.session.user.id },
      });

      res.json({ updated: true, msg: null });
    } else {
      const { favourite } = await Users.findOne({
        where: { id: req.session.user.id },
      });

      const fav1 = favourite.filter((el) => el !== Number(id));

      await Users.update(
        { favourite: fav1 },
        { where: { id: req.session.user.id } }
      );
      res.json({ updated: true, msg: null });
    }
  } catch (error) {
    res.json({ updated: false, msg: error.toString() });
  }
});

module.exports = router;
