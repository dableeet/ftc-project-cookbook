const { body } = document;

async function howToSort(event, sortByStr, sortInStr) {
  const ids = Array.from(document.querySelectorAll('.card')).map((el) => el.id);
  const { sorted, sort, msg } = await (
    await fetch('/recipe', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ids, sortBy: sortByStr, sortIn: sortInStr }),
    })
  ).json();

  if (sorted) {
    const cardBox = document.querySelector('.card-box');
    cardBox.innerHTML = '';

    sort.forEach((el) => {
      cardBox.insertAdjacentHTML('beforeend', cardHTML(el));
    });

    if (sortInStr === 'more' && sortByStr === 'time') {
      document.querySelector('.ct-li').children[2].style.display = 'block';

      document.querySelector('.ct-li').children[1].style.display = 'none';
      setTimeout(() => {
        event.target.classList.remove('sort-time-btn');

        event.target.classList.add('sort-time-less-btn');
      }, 500);
    } else if (sortInStr === 'less' && sortByStr === 'time') {
      document.querySelector('.ct-li').children[2].style.display = 'none';

      document.querySelector('.ct-li').children[1].style.display = 'block';

      setTimeout(() => {
        event.target.classList.remove('sort-time-less-btn');

        event.target.classList.add('sort-time-btn');
      }, 500);
    } else if (sortInStr === 'more' && sortByStr === 'ingr') {
      document.querySelector('.ingr-li').children[2].style.display = 'block';

      document.querySelector('.ingr-li').children[1].style.display = 'none';

      setTimeout(() => {
        event.target.classList.remove('sort-ingr-btn');

        event.target.classList.add('sort-ingr-less-btn');
      }, 500);
    } else if (sortInStr === 'less' && sortByStr === 'ingr') {
      document.querySelector('.ingr-li').children[2].style.display = 'none';

      document.querySelector('.ingr-li').children[1].style.display = 'block';

      setTimeout(() => {
        event.target.classList.remove('sort-ingr-less-btn');

        event.target.classList.add('sort-ingr-btn');
      }, 500);
    }
  } else {
    console.log(msg);
  }
}

body.addEventListener('click', async (event) => {
  if (event.target.classList.contains('sort-time-btn')) {
    await howToSort(event, 'time', 'more');
  }

  if (event.target.classList.contains('sort-time-less-btn')) {
    await howToSort(event, 'time', 'less');
  }

  if (event.target.classList.contains('sort-ingr-btn')) {
    await howToSort(event, 'ingr', 'more');
  }

  if (event.target.classList.contains('sort-ingr-less-btn')) {
    await howToSort(event, 'ingr', 'less');
  }

  if (event.target.classList.contains('fav-btn')) {
    const { updated, msg } = await (
      await fetch(`/recipe/${event.target.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ addToFav: true }),
      })
    ).json();
    if (updated) {
      event.target.style.display = 'none';
      event.target.parentNode.querySelector('.fav-delete-btn').style.display =
        'block';
    } else {
      console.log(msg);
    }
  }

  if (event.target.classList.contains('fav-delete-btn')) {
    const { updated, msg } = await (
      await fetch(`/recipe/${event.target.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ addToFav: false }),
      })
    ).json();
    if (updated) {
      event.target.style.display = 'none';
      event.target.parentNode.querySelector('.fav-btn').style.display = 'block';
    } else {
      console.log(msg);
    }
  }
});
