import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import { allmovies, savedmovies } from '../../constants/constants';

function Movies(props) {

  const cardLikeButtonClassName = (props.type === "saved-movies" ? "card__like-btn_type_remove" : "card__like-btn_type_like");
  const movies = (props.type === "saved-movies" ? savedmovies : allmovies);

  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} cardLikeButtonClassName={cardLikeButtonClassName} />
      <More />
    </>
  )
}

export default Movies;
