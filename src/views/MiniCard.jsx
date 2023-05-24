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
      className="my-1 px-1 md:w-1/2 lg:my-12 lg:px-4 lg:w-52 "
      key={id}
      id={id}
    >
      <article className="overflow-hidden rounded-lg shadow-lg h-96">
        <img alt="Placeholder" className="block h-auto w-full" src={image} />

        <section className="flex items-center leading-tight p-2 md:p-4 grid justify-items-center">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#link">
              <p className="text-center">{title}</p>
            </a>
          </h1>
        </section>
      </article>
    </div>
  );
};
