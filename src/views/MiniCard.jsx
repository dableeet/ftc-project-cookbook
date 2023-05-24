const React = require('react');

module.exports = function MiniCard({
  id,
  title,
  extendedIngredients,
  image,
  instructions,
  readyInMinutes,
  user,
}) {
  return (
    <div className="my-1 px-1 md:w-1/2 lg:my-8 lg:mx-3 lg:px-4 lg:w-96" id={id}>
      <article className="overflow-hidden rounded-lg shadow-lg h-106">
        <div className="relative">
          {user && (
            <>
              <span
                className="material-icons absolute right-2 top-2"
                style={{
                  fontSize: '3rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                brightness_1
              </span>
              <span
                className="material-icons absolute right-4 top-4"
                style={{
                  color: 'red',
                  display: 'none',
                  cursor: 'pointer',
                  fontSize: '2rem',
                }}
              >
                favorite
              </span>

              <span
                className="material-icons absolute right-4 top-4"
                style={{ fontSize: '2rem', cursor: 'pointer' }}
              >
                favorite_border
              </span>
            </>
          )}
          <img alt="food_image" className="block w-full" src={image} />
        </div>

        <header className="flex items-start leading-tight p-2 md:p-4 justify-center h-28 mb-5">
          <h1 className="text-2xl">
            <a
              className="no-underline hover:underline text-black"
              href={`/recipe/${id}`}
            >
              <p className="text-center">
                {title.length > 50 ? `${title.slice(0, 51)}...` : title}
              </p>
            </a>
          </h1>
        </header>
        <footer className="flex justify-around">
          <div className="flex justify-between">
            <span className="material-symbols-outlined">kitchen</span>
            <p className="text-center">
              {extendedIngredients.length} ingredients
            </p>
          </div>
          <div className="flex justify-between">
            <span className="material-symbols-outlined">timer</span>
            <p className="text-center">{readyInMinutes} min</p>
          </div>
        </footer>
      </article>
    </div>
  );
};
