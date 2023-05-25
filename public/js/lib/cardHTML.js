function cardHTML(card) {
  let html;

  console.log(card.added);

  if (card.added) {
    html = `<div
		class="card my-1 px-1 md:w-1/2 lg:my-8 lg:mx-3 lg:px-4 lg:w-96 "
		id=${card.id}
	>
	<article class="overflow-hidden rounded-lg shadow-secondary-500 shadow-2xl h-106 border-2 border-secondary-500">
	<div class="relative">
	<span
	class="cursor-pointer hidden fav-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
	id=${card.id}
	style="font-size:2rem"
>
	favorite_border
	</span>
	<span
	class="cursor-pointer fav-delete-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
	id=${card.id}
	style="font-size:2rem"
>
	favorite
	</span>
	<img alt="food_image" class="block w-full" src=${card.image} />
	</div>
	<header class="flex items-start leading-tight p-2 md:p-4 justify-center h-28 mb-5">
          <h1 class="text-2xl">
            <a
              class="no-underline hover:underline text-black"
              href="/recipe/${card.id}"
            >
              <p class="text-center">
                ${
                  card.title.length > 50
                    ? `${card.title.slice(0, 51)}...`
                    : card.title
                }
              </p>
            </a>
          </h1>
        </header>
        <footer class="flex justify-around">
          <div class="flex justify-between">
            <span class="material-symbols-outlined">kitchen</span>
            <p class="text-center">
              ${card.extendedIngredients.length} ingredients
            </p>
          </div>
          <div class="flex justify-between">
            <span class="material-symbols-outlined">timer</span>
            <p class="text-center">${card.readyInMinutes} min</p>
          </div>
        </footer>
	</article>
	</div>
		`;
  } else {
    html = `
		<div
		class="card my-1 px-1 md:w-1/2 lg:my-8 lg:mx-3 lg:px-4 lg:w-96 "
		id=${card.id}
	>
	<article class="overflow-hidden rounded-lg shadow-secondary-500 shadow-2xl h-106 border-2 border-secondary-500">
	<div class="relative">
	<span
	class="cursor-pointer fav-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
	id=${card.id}
	style="font-size:2rem"
>
	favorite_border
	</span>
	<span
	class="cursor-pointer hidden fav-delete-btn material-icons absolute right-4 top-4 hover:border-none border-secondary-500 border rounded-full hover:bg-secondary-500 text-center hover:text-primary-50 text-secondary-500 bg-primary-50 "
	id=${card.id}
	style="font-size:2rem"
>
	favorite
	</span>
	<img alt="food_image" class="block w-full" src=${card.image} />
	</div>
	<header class="flex items-start leading-tight p-2 md:p-4 justify-center h-28 mb-5">
          <h1 class="text-2xl">
            <a
              class="no-underline hover:underline text-black"
              href="/recipe/${card.id}"
            >
              <p class="text-center">
                ${
                  card.title.length > 50
                    ? `${card.title.slice(0, 51)}...`
                    : card.title
                }
              </p>
            </a>
          </h1>
        </header>
        <footer class="flex justify-around">
          <div class="flex justify-between">
            <span class="material-symbols-outlined">kitchen</span>
            <p class="text-center">
              ${card.extendedIngredients.length} ingredients
            </p>
          </div>
          <div class="flex justify-between">
            <span class="material-symbols-outlined">timer</span>
            <p class="text-center">${card.readyInMinutes} min</p>
          </div>
        </footer>
	</article>
	</div>
		`;
  }

  return html;
}
