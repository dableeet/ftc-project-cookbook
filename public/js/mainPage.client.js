const { body } = document;

body.addEventListener('click', async (event) => {
  // if (event.target.classList.contains('sort-time-btn')) {
  // }

  // if (event.target.classList.contains('sort-ingr-btn')) {
  // }
  if (event.target.classList.contains('fav-btn')) {
    // const { updated } = await (
    //   await fetch(`/recipe/${event.target.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    // ).json();
    // if (updated) {
    // }
    event.target.classList.add('fav-delete-btn');
    event.target.classList.remove('fav-btn');
    event.target.innerText = 'favorite';
  }

  if (event.target.classList.contains('fav-delete-btn')) {
    // const { updated } = await (
    //   await fetch(`/recipe/${event.target.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    // ).json();
    // if (updated) {
    // }
    // event.target.innerText = 'favorite_border';
    // event.target.classList.remove('fav-delete-btn');
    // event.target.classList.add('fav-btn');

    console.log('del');
  }
});
