const { body } = document;

body.addEventListener('click', async (event) => {
  if (event.target.classList.contains('sort-time-btn')) {
    const ids = Array.from(document.querySelectorAll('.card')).map(
      (el) => el.id
    );
    const { sorted, sort, msg } = await (
      await fetch('/recipe', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ids }),
      })
    ).json();

    document.querySelector('.ct-li').children[1].style.display = 'block';

    if (sorted) {
      const cardBox = document.querySelector('.card-box');
      cardBox.innerHTML = '';

      sort.forEach((el) => {
        cardBox.insertAdjacentHTML('beforeend', cardHTML(el));
      });
    }
  }

  if (event.target.classList.contains('sort-ingr-btn')) {
    const ids = Array.from(document.querySelectorAll('.card')).map(
      (el) => el.id
    );
    const { sorted, sort, msg } = await (
      await fetch('/recipe', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ids }),
      })
    ).json();

    document.querySelector('.ingr-li').children[1].style.display = 'block';

    if (sorted) {
      const cardBox = document.querySelector('.card-box');
      cardBox.innerHTML = '';

      sort.forEach((el) => {
        cardBox.insertAdjacentHTML('beforeend', cardHTML(el));
      });
    }
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
