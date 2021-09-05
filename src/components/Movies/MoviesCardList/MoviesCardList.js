import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  function handleCardLike(id, isLiked, setIsLiked) {
    props.onMovieLike(id, isLiked, setIsLiked)
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        { (props.movies.map(movie => {
            return <MoviesCard key={movie.id} id={movie.id} image={"https://api.nomoreparties.co" + movie.image.url}
            name={movie.nameRU} saved={movie.isSaved} duration={movie.duration} onCardLike={handleCardLike} cardLikeButtonClassName={props.cardLikeButtonClassName} trailer={movie.trailerLink}/>
          }))
        }
      </div>
    </section>
  )
}

export default MoviesCardList;
