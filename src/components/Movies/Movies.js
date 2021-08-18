import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { movies } from '../../constants/constants';

function Movies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <More />
    </>
  )
}

export default Movies;
