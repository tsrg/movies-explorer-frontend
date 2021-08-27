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

function Search(req) {
  if (!checkLocal()) {
    saveToLocal();
  }

  const moviesLocal = JSON.parse(localStorage.getItem("movies"));

  console.log(req);
  console.log(Object.values(moviesLocal[1]));

  const searchResult = moviesLocal.filter(item => Object.values(item).toString().toLowerCase.includes(req.toLowerCase));
        //                       arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)))

  console.log(searchResult);


}

export default Search;
