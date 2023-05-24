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
    <div
      className="my-1 px-1 md:w-1/2 lg:my-8 lg:mx-3 lg:px-4 lg:w-96"
      key={id}
      id={id}
    >
      <article className="overflow-hidden rounded-lg shadow-lg h-106">
        <img alt="Placeholder" className="block h-auto w-full" src={image} />

        <header className="flex items-center leading-tight p-2 md:p-4 justify-center h-28 mb-5">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#link">
              <p className="text-center">{title}</p>
            </a>
          </h1>
        </header>
        <footer className='flex justify-around mb-16'>
          <div className='flex justify-between'>
            <span className="material-symbols-outlined">kitchen</span>
            <p className='text-center'>{extendedIngredients.length} ingredients</p>
          </div>
          <div className='flex justify-between'>
            <span className="material-symbols-outlined">timer</span>
            <p className='text-center'>{readyInMinutes} min</p>
          </div>
        </footer>
      </article>
    </div>
  );
};
