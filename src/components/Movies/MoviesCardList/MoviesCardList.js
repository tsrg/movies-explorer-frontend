import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  function handleCardLike(movie) {
    console.log(movie);
  }

  return (
    <section className="movies-card-list">
      { (props.movies.map(movie => {
          return <MoviesCard key={movie.id} id={movie._id} image={"https://api.nomoreparties.co" + movie.image.url}
          name={movie.nameRU} saved={movie.isSaved} duration={movie.duration} onCardLike={handleCardLike} cardLikeButtonClassName={props.cardLikeButtonClassName} />
        }))
        }
    </section>
  )
}

export default MoviesCardList;
