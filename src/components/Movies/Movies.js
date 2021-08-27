import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import Search from '../../utils/Search';
import React, { useEffect, useState } from 'react';

function Movies(props) {
  const cardLikeButtonClassName = (props.type === "saved-movies" ? "card__like-btn_type_remove" : "card__like-btn_type_like");
  const [movies, setMovies] = useState([]);
  const [moreMoviesLeft, setmoreMoviesLeft] = useState(0);

  function handleSearchSubmit(req) {
    Search(req);
  }

  return (
    <>
      <SearchForm onSearchSubmit={handleSearchSubmit} />
      <MoviesCardList movies={movies} cardLikeButtonClassName={cardLikeButtonClassName} />
      <More isActive={(moreMoviesLeft > 0)} />
    </>
  )
}

export default Movies;
