import { getMovies } from './MoviesApi';

function saveToLocal() {
  getMovies()
    .then((movies) => {
      console.log("downloded");
      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('_expiersin', (Date.now() + 86400000));
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных: ${err}`);
  });
}

function checkLocal() {
  const now = Date.now();
  const exp = localStorage.getItem('_expiersin');
  return ( exp > now );
}

function Search() {
  const moviesLocal = JSON.parse(localStorage.getItem("movies"));

  console.log(localStorage.getItem("_expiersin"));
  console.log(checkLocal());


  if (!checkLocal()) {
    saveToLocal();
  }


}

export default Search;
