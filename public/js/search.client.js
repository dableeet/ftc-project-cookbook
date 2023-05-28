const { searchForm } = document.forms;

searchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { ingredient } = Object.fromEntries(new FormData(searchForm));

  try {
    await fetch(`/recipe/ingredient/${ingredient}`);
  } catch (error) {
    console.log(error);
  }
});
