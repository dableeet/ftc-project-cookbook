const { body } = document;

body.addEventListener('click', async (event) => {
  if (event.target.classList.contains('sort-time-btn')) {
    console.log('ddddddd');
  }

  // if (event.target.classList.contains('sort-ingr-btn')) {
  // }
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
