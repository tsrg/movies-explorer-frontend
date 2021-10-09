import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from './MoviesCardList/MoviesCardList';
import * as MoviesUtils from '../../utils/MoviesUtils';
import React, { useEffect, useState } from 'react';
import * as MainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

let movies;
let content = "waiting";

function Movies(props) {
  const cardLikeButtonClassName = "card__like-btn_type_remove";
  const [moviesToRender, setMoviesToRender] = useState([]);

  function renderMovies(movies) {
      if (movies.length > 0) {
        content = "moviesList";
        setMoviesToRender(movies);
      } else {
        content = "nothing";
        setMoviesToRender([]);
      }
  }

  function getMovies() {
    MainApi.getMovies()
    .then((res) => {
      movies = res;
      movies.forEach((movie) => {
        movie.id = movie._id;
        movie.image = {url: movie.image};
        movie.trailerLink = movie.trailer;
      })
      renderMovies(movies);
    })
    .catch((err) => {console.log(err);})
  }

  function handleSearchSubmit(req, isShort) {
    content = "waiting";
    MoviesUtils.SearchInSaved(req, isShort, movies)
    .then((res) => {
      movies = res;
      content = "moviesList";
      setMoviesToRender(movies);
    })

  }
  function findMovieById(movies, id) {
    return movies.find(item => item.id === id)
  }

  function handleMovieLike(id, isLiked, setIsLiked) {
      const movie = findMovieById(movies, id);
      MainApi.deleteMovie(movie._id)
      .then((res) => {
        setIsLiked(false);
        movies = movies.filter(item => item.id !== movie._id);
        renderMovies(movies);
      })
      .catch((err) => {console.log(err);})
    }


  const start = () => {
    content = "waiting";
    getMovies();
  }


  useEffect(() => {
    content = "moviesList";
  }, [setMoviesToRender])

  useEffect(() => {start()}, []);

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
        <MoviesCardList movies={moviesToRender} onMovieLike={handleMovieLike} cardLikeButtonClassName={cardLikeButtonClassName} keyForCard="_id" />
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
      );}

}

export default Movies;
