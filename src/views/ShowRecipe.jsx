const React = require('react');
const Layout = require('./Layout');

module.exports = function ShowRecipe({ user, clearRecipe, isFavourite }) {
  return (
    <Layout user={user}>
      <script defer src="/js/favouriteRecipes.js" />
      <div className="showRecipeWrapper">
        <div className="showRecipeContainer">

          <div className="showRecipeHeader">

            <div className="showRecipeHeaderLeftSide">
              <div className="showRecipeFoto mx-2" style={{ backgroundImage: `url(${clearRecipe.image})` }} />
              {
                isFavourite ? (
                  <div id={clearRecipe.id} className="showRecipeFavourite">
                    <button name="deleteBtn" type="button" className="text-white hover:text-secondary-500 border bg-green-400 hover:bg-white hover:border-secondary-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-1">Удалить из избранного</button>
                  </div>
                ) : (
                  <div id={clearRecipe.id} className="showRecipeFavourite">
                    <button name="inviteBtn" type="button" className="text-secondary-500 hover:text-white border border-secondary-500 hover:bg-secondary-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-1">Добавить в избранное</button>
                  </div>
                )
              }
            </div>

            <div className="showRecipeHeaderRightSide mx-3 mt-3">
              <div className="showRecipeTitle">
                <h1 className="text-center text-xl">{clearRecipe.title}</h1>
              </div>
              <div className="showRecipeIngredients ml-5 mt-2">
                <ul className="list-disc">
                  <strong>Ingredients:</strong>
                  {clearRecipe.extendedIngredients.map((el) => (
                    <li key={el.id}>{el.original}</li>))}
                </ul>
              </div>
            </div>

          </div>

          <div className="showRecipeBody p-3">
            {clearRecipe.instructions}
          </div>
        </div>

      </div>
    </Layout>
  );
};
