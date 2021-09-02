import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import More from './More/More';
import * as MoviesUtils from '../../utils/MoviesUtils';
import React, { useEffect, useState } from 'react';
import * as mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const cardLikeButtonClassName = (props.type === "saved-movies" ? "card__like-btn_type_remove" : "card__like-btn_type_like");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreMoviesLeft, setmoreMoviesLeft] = useState(0);
  const [moviesToRender, setMoviesToRender] = useState([]);
  //const [nMoviesToShow, setNMoviesToShow] = useState(0);


  let nmovie;
  let movies = [];
  let nMoviesToShow = 0;
  //let moviesToRender = [];
  //const [content, setContent] = useState("Введите название фильма в строку поиска");

  //const [content, setContent] = useState("Введите название фильма в строку поиска");
  //const result = <MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} />


  function checkWidth() {
    const n = windowWidth > 900 ? 12 :
              windowWidth > 580 ? 8 : 5;
    return n;
  }

  let n;

  function setmts(n) {
    nMoviesToShow = nMoviesToShow + n;
    console.log("nMoviesToShow: " + nMoviesToShow);
  }

  function renderMovies(res) {
    return new Promise((resolve, reject) => {
      setMoviesToRender(res.slice(0, nMoviesToShow));
      console.log(res.slice(0, nMoviesToShow));

      resolve(moviesToRender);
      reject(new Error("pff"))
    })
  }

  function showMore() {
//console.log(numberOfMovies(nMoviesToShow));
    nmovie = nmovie + 3;
    console.log(nmovie);
    //moviesToRender = (movies.slice(0, nMoviesToShow));
    //setContent(<MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} />);
    const mts = movies.slice(0, nmovie)
    //setMoviesToRender(mts);
  }

  function numberOfMovies(n) {
    console.log("MORE" + n);
    console.log(nMoviesToShow);
    windowWidth > 900 ? n = n + 3 :
    windowWidth > 580 ? n = n + 2 : n = n + 1;

    return n;
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
    MoviesUtils.search(req, isShort)
    .then((res) => {
      movies = res;
      nmovie = checkWidth();
      console.log(nMoviesToShow);
      setMoviesToRender(res.slice(0, nmovie));
      //setContent(<MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} />);
    //  renderMovies(res)
    })
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

  }



  function findMovieById(movies, id) {
    console.log(movies);
    return movies.find(item => item.id === id)
  }

  function handleMovieLike(id, isLiked, setIsLiked) {
    if (isLiked) {
      console.log(id);
    } else {
      console.log(movies);
      const movie = findMovieById(movies, id);
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
    //checkWidth();

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
