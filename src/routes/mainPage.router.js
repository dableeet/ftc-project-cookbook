const router = require('express').Router();

const { Users, Recipes } = require('../../db/models');

const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const { recipes } = await (
      await fetch('https://api.spoonacular.com/recipes/random?number=12', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.APIKEY,
        },
      })
    ).json();

    const noNullObj = recipes.filter((el) => el.image && el.instructions && el);

    const cardInfo = [];

    noNullObj.forEach((el) => {
      const info = {
        id: el.id,
        title: el.title,
        extendedIngredients: el.extendedIngredients,
        image: el.image,
        instructions: el.instructions,
        readyInMinutes: el.readyInMinutes,
      };

      Promise.resolve(
        Recipes.findOrCreate({
          where: { id: el.id },
          defaults: el,
        }),
      );

      cardInfo.push(info);
    });

    // const cardInfo = (await Recipes.findAll({ limit: 12 })).map((el) =>
    //   el.get({
    //     plain: true,
    //   })
    // );

    res.render(Main, { cardInfo });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
