const React = require('react');

module.exports = function MiniCard({
  id,
  title,
  extendedIngredients,
  image,
  readyInMinutes,
  user,
  added,
}) {
  return (
    <div
      className="my-1 px-1 md:w-1/2 lg:my-8 lg:mx-3 lg:px-4 lg:w-96 "
      id={id}
    >
      <article className="overflow-hidden rounded-lg shadow-secondary-500 shadow-2xl h-106 border-2 border-secondary-500">
        <div className="relative">
          {user && added ? (
            <>
              <span
                className="fav-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
                style={{
                  fontSize: '2rem',
                  width: '3rem',
                  cursor: 'pointer',
                  display: 'none',
                }}
                id={id}
              >
                favorite_border
              </span>

              <span
                className="fav-delete-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
                style={{
                  fontSize: '2rem',
                  width: '3rem',
                  cursor: 'pointer',
                }}
                id={id}
              >
                favorite
              </span>
            </>
          ) : (
            <>
              <span
                className="fav-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
                style={{
                  fontSize: '2rem',
                  width: '3rem',
                  cursor: 'pointer',
                }}
                id={id}
              >
                favorite_border
              </span>

              <span
                className="fav-delete-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
                style={{
                  fontSize: '2rem',
                  width: '3rem',
                  cursor: 'pointer',
                  display: 'none',
                }}
                id={id}
              >
                favorite
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
