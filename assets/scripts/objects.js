const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMoviehandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue === '') {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName] : extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  console.log("addMoviehandler -> movies", movies)
};










addMovieBtn.addEventListener('click', addMoviehandler);
