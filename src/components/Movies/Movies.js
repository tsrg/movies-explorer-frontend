import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import Search from '../../utils/Search';
import React, { useEffect, useState } from 'react';
import * as mainApi from '../../utils/MainApi';

function Movies(props) {
  const cardLikeButtonClassName = (props.type === "saved-movies" ? "card__like-btn_type_remove" : "card__like-btn_type_like");
  const [movies, setMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreMoviesLeft, setmoreMoviesLeft] = useState(0);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [nMoviesToShow, setNMoviesToShow] = useState(0);

  function checkWidth() {
    const n = windowWidth > 900 ? 12 :
              windowWidth > 580 ? 8 : 5;
    setNMoviesToShow(n);
  }

  function renderMovies(res) {
    setMovies(res);
    checkWidth();
    console.log(nMoviesToShow);
    setMoviesToRender(movies.slice(0, nMoviesToShow));
    console.log("rendering-end");
  }

  const savedMovies = () => {
    mainApi.getMovies()
    .then((res) => {return res})
    .catch((err) => {console.log(err)});
  }

  function checkSavedMovies(movies, saved) {
    movies.forEach((movie) => {})
  }

  function handleSearchSubmit(req, isShort) {
    Search(req, isShort)
    .then((res) => renderMovies(res))
    //.then(renderMovies())
    //setMovies(Search(req, isShort));
  }

  function handleWindowResize() {

    window.addEventListener("resize", resizeHandler, false);

    let resizeTimeout;
    function resizeHandler() {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setWindowWidth(window.innerWidth);
        }, 1000);
      }
    }

  };

  const showMore = () => {
    console.log("MORE");
    console.log(windowWidth);
    windowWidth > 900 ? setNMoviesToShow(nMoviesToShow + 3) :
    windowWidth > 580 ? setNMoviesToShow(nMoviesToShow + 2) : setNMoviesToShow(nMoviesToShow + 1);
    setMoviesToRender(movies.slice(0, nMoviesToShow));
  }

  function findMovieById(id) {
    return movies.find(item => item.id === id)
  }

  function handleMovieLike(id, isLiked, setIsLiked) {
    if (isLiked) {
      console.log(id);
    } else {
      const movie = findMovieById(id);
      mainApi.saveMovie(transformMovie(movie))
      .then(res => {setIsLiked(true)})
      .catch(err => console.error(err));
    }
  }

  function transformMovie(movie) {
    const rightMovie = {};
    rightMovie.country = movie.country === null ? "Информация не доступна" : movie.country;
    rightMovie.director = movie.director === null ? "Информация не доступна" : movie.director;
    rightMovie.duration = movie.duration;
    rightMovie.trailer = movie.trailerLink;
    rightMovie.year = movie.year;
    rightMovie.description = movie.description;
    rightMovie.image = "https://api.nomoreparties.co" + movie.image.url;
    rightMovie.thumbnail = "https://api.nomoreparties.co" + movie.image.formats.thumbnail;
    rightMovie.nameRU = movie.nameRU;
    rightMovie.nameEN = movie.nameEN;
    rightMovie.movieId = movie.id;
    return rightMovie;
  }

  useEffect(() => {
    handleWindowResize();
  }, []);

  return (
    <>
      <SearchForm onSearchSubmit={handleSearchSubmit} />
      <MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} />
      <More isActive={(moreMoviesLeft > 0)} onClick={showMore} />
    </>
  )
}

export default Movies;
