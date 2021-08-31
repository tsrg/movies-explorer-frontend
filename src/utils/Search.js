import { getMovies } from './MoviesApi';

function saveToLocal() {
  getMovies()
    .then((movies) => {
      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('_expiersin', (Date.now() + 86400000));
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных: ${err}`);
  });
}

async function checkLocal() {
  const now = Date.now();
  const exp = localStorage.getItem('_expiersin');

  if (now > exp) {
    saveToLocal()
    .then(() => { return })
    .catch((err) => {
      console.log(`Ошибка загрузки данных: ${err}`);
    });
  }

  return ( exp > now );
}

function Search(req, isShort) {

  return new Promise((resolve, reject) => {
    checkLocal();
    let moviesLocal = JSON.parse(localStorage.getItem("movies"));

    if (isShort) {
      moviesLocal = moviesLocal.filter(item => item.duration < 40);
    }

    const searchResult =  moviesLocal.filter(item => Object.values(item).toString().toLowerCase().includes(req.toLowerCase()));
    resolve(searchResult);
    reject(new Error('error'));
  });
}

export default Search;
