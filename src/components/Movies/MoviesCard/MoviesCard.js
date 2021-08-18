import React from 'react';
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard(props) {

    const currentUser = React.useContext(CurrentUserContext);
  //  const isOwn = props.card.owner === currentUser._id;

    const isLiked = true;

    //props.card.likes.some(i => i === currentUser._id);
    const movieLikeButtonClassName = (
        `card__like-btn ${isLiked ? 'card__like-btn_active' : 'card__like-btn_inactive'}`
        );

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function duration() {
      if (props.duration < 60) {
        return (
          props.duration + ' м'
        )}
        else {
          return (
            Math.floor(props.duration / 60) + ' ч ' + (props.duration % 60) + ' м'
          )
        }
      }

    return (
        <article id={props.id} className="card">
            <div className="card__pic-wrapper">
                <img className="card__picture" src={props.image} alt={props.name} />
            </div>
            <div className="card__title-container">
                <h2 className="card__title">{props.name}</h2>
                <button className={movieLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            </div>
            <p className="card__duration">{duration()}</p>
        </article>
        )
}

export default MoviesCard;
