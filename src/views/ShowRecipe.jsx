const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowRecipe({ user, clearRecipe }) {
  console.log(clearRecipe);
  return (
    <Layout user={user}>
      <div className="showRecipeWrapper">

        <div className="showRecipeContainer">

          <div className="showRecipeHeader">

            <div className="showRecipeHeaderLeftSide">
              <div className="showRecipeFoto">
                <img src={clearRecipe.image} alt="foto dish" />
              </div>
              <div className="showRecipeFavourite">
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-1 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Добавить в избранное</button>
              </div>
            </div>

            <div className="showRecipeHeaderRightSide">
              <div className="showRecipeTitle m-1">
                <h1>{clearRecipe.title}</h1>
              </div>
              <div className="showRecipeIngredients m-1">
                <ul>
                  Ingredients:
                  {clearRecipe.extendedIngredients.map((el) => (
                    <li>{el.original}</li>))}
                </ul>
              </div>
            </div>

          </div>

          <div className="showRecipeBody">
            {clearRecipe.instructions}
            {clearRecipe.instructions}

          </div>

        </div>

      </div>
    </Layout>
  );
};
