import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import * as MoviesUtils from '../../utils/MoviesUtils';
import React, { useEffect, useState } from 'react';
import * as mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

let movies;
let m;
let moreMoviesLeft;
let content = "waiting";


function Movies(props) {
  const cardLikeButtonClassName = (props.type === "saved-movies" ? "card__like-btn_type_remove" : "card__like-btn_type_like");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moviesToRender, setMoviesToRender] = useState([]);

  function checkWidth() {
    const n = windowWidth > 900 ? 12 :
              windowWidth > 580 ? 8 : 5;
    return n;
  }

  function renderMovies(movies, n) {
    moreMoviesLeft = (movies.length - n);
    const list = movies.slice(0, n);
    if (list.length > 0) {
      content = "moviesList";
      setMoviesToRender(list);
    } else {
      content = "nothing";
      setMoviesToRender([]);
    }
  }

  function showMore() {
    const n = windowWidth > 900 ? 3 :
              windowWidth > 580 ? 2 : 1;
    m = m + n;
    moreMoviesLeft = moreMoviesLeft - n;
    renderMovies(movies, m);
  }

  function checkSavedMovies(movies) {
    mainApi.getMovies()
    .then((res) => {
      movies.forEach((movie) => {
        const result = res.find(item => item.movieId === movie.id);
      if (result) {
        movie.isSaved = true;
        movie._id = result._id;
      } else {
        movie.isSaved = false;
      }
      })
    })
    .then((res) => {
      renderMovies(movies, m);
    })
  }

  function handleSearchSubmit(req, isShort) {
    content = "waiting";
    MoviesUtils.search(req, isShort)
    .then((res) => {
      movies = res;
      m = checkWidth();
      checkSavedMovies(movies)
    })

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

  }

  function findMovieById(movies, id) {
    return movies.find(item => item.id === id)
  }

  function handleMovieLike(id, isLiked, setIsLiked) {
    if (isLiked) {
      const movie = findMovieById(movies, id);
      mainApi.deleteMovie(movie._id)
      .then((res) => {
        setIsLiked(false);
      })
      .catch((err) => {console.log(err);})
    } else {
      const movie = findMovieById(movies, id);
      mainApi.saveMovie(transformMovie(movie))
      .then(res => {
        movie._id = res._id;
        setIsLiked(true);
      })
      .catch(err => console.log(err));
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
    rightMovie.image = movie.image.url;
    rightMovie.thumbnail = "https://api.nomoreparties.co" + movie.image.formats.thumbnail;
    rightMovie.nameRU = movie.nameRU;
    rightMovie.nameEN = movie.nameEN;
    rightMovie.movieId = movie.id;
    return rightMovie;
  }

  function getFilsmLocal() {
    let moviesLocal = JSON.parse(localStorage.getItem("movies"));
    movies = moviesLocal;
  }

  function start() {
    content = "waiting";

    if (MoviesUtils.checkLocalMovies()) {
      getFilsmLocal();
      checkSavedMovies(movies);
      content = "moviesList";
      return;
    } else {
      content = "start";
      return;
    }
  }

  useEffect(() => {
    content = "moviesList";
  }, [setMoviesToRender])


  useEffect(() => {
    m = checkWidth();
    start();
    handleWindowResize();
  }, []);

  if (content === "waiting") {
    return (
      <>
        <Header type={"signedIn"} color={"black"} />
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        {Preloader()}
        <Footer />
      </>
    );
  } else if (content === "moviesList") {
    return (
      <>
        <Header type={"signedIn"} color={"black"} />
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} />
        <More isActive={(moreMoviesLeft > 0)} onClick={showMore} />
        <Footer />
      </>
    );} else if (content === "nothing") {
      return (
        <>
          <Header type={"signedIn"} color={"black"} />
          <SearchForm onSearchSubmit={handleSearchSubmit} />
          <section className="movies-card-list">
            <div className="movies-card-list__container">
              <p className="movies-card-list__text">Ничего не найдено...</p>
            </div>
          </section>
          <Footer />
        </>
      );} else if (content === "start") {
        return (
          <>
            <Header type={"signedIn"} color={"black"} />
            <SearchForm onSearchSubmit={handleSearchSubmit} />
            <section className="movies-card-list">
              <div className="movies-card-list__container">
                <p className="movies-card-list__text">Для начала введите название фильма в поисковую строку!</p>
              </div>
            </section>
            <Footer />
          </>
        );}

}

export default Movies;
